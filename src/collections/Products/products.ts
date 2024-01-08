import {
    BeforeChangeHook,
    AfterChangeHook,
} from 'payload/dist/collections/config/types'
import { Access, CollectionConfig, Field, FieldHook } from 'payload/types'
import { Product, User } from '../../payload-types'
import { stripe } from '../../lib/stripe'
import { CustomSubcategory } from '../../components/CustomSubcategories'
import PriceAfterCommission from '../../components/PriceAfterCommision'
import { toast } from 'react-toastify'
import { PRODUCT_CATEGORIES } from '../../config'

const addUser: BeforeChangeHook<Product> = async ({ req, data }) => {
    const user = req.user

    return { ...data, user: user.id }
}

const syncUser: AfterChangeHook<Product> = async ({ req, doc }) => {
    const fullUser = await req.payload.findByID({
        collection: 'users',
        id: req.user.id,
    })

    if (fullUser && typeof fullUser === 'object') {
        const { products } = fullUser

        const allIDs = [
            ...(products?.map((product) =>
                typeof product === 'object' ? product.id : product
            ) || []),
        ]
        const createdProductIDs = allIDs.filter(
            (id, index) => allIDs.indexOf(id) === index
        )

        const dataToUpdate = [...createdProductIDs, doc.id]

        await req.payload.update({
            collection: 'users',
            id: fullUser.id,
            data: {
                products: dataToUpdate,
            },
        })
    }
}

const isAdminOrHasAccess =
    (): Access =>
    ({ req: { user: _user } }) => {
        const user = _user as User | undefined

        if (!user) return false
        if (user.role === 'admin') return true

        const userProductIDs = (user.products || []).reduce<Array<string>>(
            (acc, product) => {
                if (!product) return acc
                if (typeof product === 'string') {
                    acc.push(product)
                } else {
                    acc.push(product.id)
                }

                return acc
            },
            []
        )

        return {
            id: {
                in: userProductIDs,
            },
        }
    }

export const Products: CollectionConfig = {
    slug: 'products',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: isAdminOrHasAccess(),
        update: isAdminOrHasAccess(),
        delete: isAdminOrHasAccess(),
    },
    hooks: {
        afterChange: [syncUser],
        beforeChange: [
            addUser,
            async (args) => {
                if (args.operation === 'create') {
                    const data = args.data as Product

                    const createdProduct = await stripe.products.create({
                        name: data.name,
                        default_price_data: {
                            currency: 'EUR',
                            unit_amount: Math.round(data.price * 100),
                        },
                    })

                    const updated: Product = {
                        ...data,
                        stripeId: createdProduct.id,
                        priceId: createdProduct.default_price as string,
                    }

                    return updated
                } else if (args.operation === 'update') {
                    const data = args.data as Product

                    const updatedProduct = await stripe.products.update(
                        data.stripeId!,
                        {
                            name: data.name,
                            default_price: data.priceId!,
                        }
                    )

                    const updated: Product = {
                        ...data,
                        stripeId: updatedProduct.id,
                        priceId: updatedProduct.default_price as string,
                    }

                    return updated
                }
            },
        ],
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: false,
            admin: {
                condition: () => false,
            },
        },
        // TODO translate
        {
            name: 'name',
            label: "titre de l'article",
            type: 'text',
            required: true,
            unique: true,

            admin: {
                description:
                    "donnez un titre unique à votre article, par exemple: Titre de l'article + Nom du createur / designer / marque",
            },
        },
        {
            name: 'description',
            type: 'textarea',
            label: "Description de l'article (optionnelle, mais utile pour les moteurs de recherche)",
            admin: {
                description:
                    "Vendeurs, stimulez votre vente en donnant le maximum d'informations à votre client. Origine du produit, époque, style, petit historique, matériaux, couleures, ect... N'oubliez pas les dimensions ou le poid de l'article",
            },
        },
        {
            name: 'price',
            label: 'Prix en EUR',
            min: 0,
            max: 25000,
            type: 'number',
            required: true,
            validate: (data) => {
                const price = data
                if (typeof price === 'string') {
                    return 'Veuillez entrer seulement des chiffres'
                } else return price
            },
        },
        {
            name: 'reducedPrice',
            label: 'Prix aprés réduction en EUR',
            min: 0,
            type: 'number',
            required: false,
            validate: (data, siblingData) => {
                const price = siblingData.data.price
                const reducedPrice = data
                if (reducedPrice > Number(price)) {
                    return 'Le prix réduit ne peut pas être supérieur au prix actuel'
                } else if (typeof reducedPrice === 'string') {
                    return 'Veuillez entrer seulement des chiffres'
                } else return reducedPrice
            },

            admin: {
                description:
                    'Pour booster votre vente, vous pouvez éventuellement réduire le prix de votre article',
            },
        },
        {
            name: 'priceAfterCommission',
            label: `(Prix aprés comission) en EUR `,
            type: 'text',
            admin: {
                readOnly: true,
                components: {
                    Field: PriceAfterCommission,
                },
            },
        },
        {
            name: 'category',
            type: 'radio',
            required: true,
            options: PRODUCT_CATEGORIES.map((category) => {
                return {
                    label: category.label,
                    value: category.value,
                }
            }),
        },
        {
            name: 'subcategory',
            label: 'Sous-catégories',
            type: 'text',
            required: true,
            admin: {
                readOnly: false,
                components: {
                    Field: CustomSubcategory,
                },
            },
        },
        {
            name: 'images',
            type: 'array',
            label: 'Images du produit',
            minRows: 1,
            maxRows: 5,
            required: true,
            admin: {
                description:
                    'Chers vendeurs, afin que votre boutique soit agéable à regarder, nous vous invitons à présenter vos articles en gros plan avec un fond neutre ou une déco sympas.',
            },
            labels: {
                singular: 'Image',
                plural: 'Images',
            },
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    label: 'ajouter une image',
                    relationTo: 'media',
                    required: true,
                },
            ],
        },
        {
            name: 'approvedForSale',
            label: 'Status du produit',
            type: 'select',
            defaultValue: 'pending',
            access: {
                create: ({ req }) => req.user.role === 'admin',
                read: ({ req }) => req.user.role === 'admin',
                update: ({ req }) => req.user.role === 'admin',
            },
            options: [
                {
                    label: 'En cours de vérification',
                    value: 'pending',
                },
                {
                    label: 'Produit approuvé',
                    value: 'approved',
                },
                {
                    label: 'Produit refusé',
                    value: 'denied',
                },
            ],
        },
        {
            name: 'ShipmentStatus',
            label: "Status de l'envoie",
            type: 'select',
            defaultValue: 'notSent',
            access: {
                create: ({ req }) => req.user.role === 'admin',
                read: ({ req }) => req.user.role === 'admin',
                update: ({ req }) => req.user.role === 'admin',
            },
            options: [
                {
                    label: 'Pas encore envoyé',
                    value: 'notSent',
                },
                {
                    label: 'Envoyé',
                    value: 'pending',
                },
                {
                    label: 'Produit reçu',
                    value: 'received',
                },
                {
                    label: 'Produit refusé',
                    value: 'denied',
                },
                {
                    label: 'produit accepté',
                    value: 'accepted',
                },
            ],
        },
        {
            name: 'priceId',
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
        {
            name: 'stripeId',
            access: {
                create: () => false,
                read: () => false,
                update: () => false,
            },
            type: 'text',
            admin: {
                hidden: true,
            },
        },
    ],
}
