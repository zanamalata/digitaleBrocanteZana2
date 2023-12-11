import {
    BeforeChangeHook,
    AfterChangeHook,
} from 'payload/dist/collections/config/types'
import { PRODUCT_CATEGORIES } from '../../config'
import { Access, CollectionConfig, Field } from 'payload/types'
import { Product, User } from '../../payload-types'
import { stripe } from '../../lib/stripe'
import { CustomSelectComponent } from '../../components/CustomSelectComponent'

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
            max: 10000,
            type: 'number',
            required: true,
        },
        {
            name: 'images',
            type: 'array',
            label: 'Images du produit',
            minRows: 1,
            maxRows: 5,
            required: true,
            admin: {
                description: 'Chers vendeurs, afin que votre boutique soit agéable à regarder, nous vous invitons à présenter vos articles en gros plan avec un fond neutre ou une déco sympas.',
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
        // {
        //     name: 'categoryBis',
        //     label: 'Categorie',
        //     type: 'select',
        //     options: PRODUCT_CATEGORIES.map(({ label, value, featured }) => ({
        //       label,
        //       value,
        //     })),
        //     required: false,
        // },
        {
          name: 'category',
          type: "text",
          required: true,
          admin: {
            components : {
              Field: CustomSelectComponent,
            },
            description: "Choisissez une categorie qui correspond à votre article"
          }
        },
        // {
        //     name: 'product_files',
        //     label: 'Product file(s)',
        //     type: 'relationship',
        //     required: false,
        //     relationTo: 'product_files',
        //     hasMany: false,
        // },
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
