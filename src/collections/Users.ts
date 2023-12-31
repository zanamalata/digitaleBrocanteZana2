import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig, FieldAccess } from 'payload/types'

const adminsAndUser: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true

    return {
        id: {
            equals: user.id,
        },
    }
}

const adminsAndSeller: FieldAccess = ({ req: { user } }) => {
    if (user.role === 'admin') return true
    else if (user.role === 'seller') return true
    else return false
}

export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return PrimaryActionEmailHtml({
                    actionLabel: 'verify your account',
                    buttonText: 'Verify Account',
                    href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
                })
            },
        },
    },
    access: {
        read: adminsAndUser,
        create: () => false,
        update: () => true,
        delete: ({ req }) => req.user.role === 'admin',
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
        defaultColumns: ['id'],
    },
    fields: [
        {
            name: 'products',
            label: 'Products',
            admin: {
                condition: () => false,
            },
            type: 'relationship',
            relationTo: 'products',
            hasMany: true,
        },
        // {
        //   name: 'product_files',
        //   label: 'Product files',
        //   admin: {
        //     condition: () => false,
        //   },
        //   type: 'relationship',
        //   relationTo: 'product_files',
        //   hasMany: true,
        // },
        {
            name: 'role',
            defaultValue: 'user',
            required: true,

            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
                { label: 'Seller', value: 'seller' },
            ],
        },
        {
            name: 'username',
            label: "Nom d'utilisateur",
            type: 'text',
            access: {
                create: () => true,
                read: () => true,
                update: () => true,
            },
            admin: {
                description:
                    "Nom d'utilisateur: le nom que verrons les autres utilisateurs de la plateforme",
            },
        },
        {
            name: 'seller_name',
            label: 'Nom du vendeur ou de la boutique',
            type: 'text',
            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                condition: () => true,
                description: 'Le nom du vendeur ou de la boutique',
            },
            required: false,
        },
        {
            name: 'seller_activity',
            label: 'activité du vendeur',
            type: 'text',
            required: false,
            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                condition: () => true,
                description: 'activité du vendeur ou de la boutique',
                placeholder: 'brocanteur, artisant, designer, artiste, etc...',
            },
        },
        {
            name: 'seller_description',
            label: 'Description du vendeur ou de la boutique',
            type: 'textarea',
            required: false,
            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                condition: () => true,
                description:
                    'Pour embellir votre boutique donner une description de votre boutique',
                placeholder:
                    'description de votre boutique ou de vos articles, par exemple : je suis brocanteur spécialisé dans le style brutaliste, mes articles sont sélectionnés et trier.....',
            },
        },
        {
            name: 'photo',
            type: 'upload',
            label: 'Ajouter une photo',
            relationTo: 'media',
            required: false,

            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                description:
                    'vendeurs vous pouvez rajouté une photo pour illustrer votre boutique',
            },
        },
        {
            name: 'banner',
            type: 'upload',
            label: 'Ajouter une bannière',
            relationTo: 'media',
            required: false,

            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                description:
                    'vendeurs vous pouvez rajouté une bannière personalisée pour illustrer votre boutique',
            },
        },
        {
            name: 'address',
            label: 'Adresse',
            type: 'group',
            interfaceName: 'address',
            fields: [
                {
                    name: 'firstname',
                    label: 'Prénom',
                    type: 'text',
                    maxLength: 65,
                    admin: {
                        placeholder: 'Prénom',
                    },
                },
                {
                    name: 'lastname',
                    label: 'Nom',
                    type: 'text',
                    maxLength: 85,
                    admin: {
                        placeholder: 'Nom',
                    },
                },
                {
                    name: 'address1',
                    label: 'Adresse',
                    type: 'text',
                    maxLength: 120,
                    admin: {
                        placeholder: 'Votre adresse',
                    },
                },
                {
                    name: 'address2',
                    label: "Complément d'addresse",
                    type: 'text',
                    maxLength: 120,
                    admin: {
                        placeholder: "Complément d'adresse",
                    },
                },
                // TODO automatic city with postcode
                {
                    name: 'postcode',
                    label: 'Code postal',
                    type: 'number',
                    admin: {
                        placeholder: 'Code postal',
                    },
                },
                {
                    name: 'city',
                    label: 'Ville',
                    type: 'text',
                    maxLength: 30,
                    admin: {
                        placeholder: 'Votre ville',
                    },
                },
                // TODO proper localize and add flag
                {
                    name: 'country',
                    label: 'Pays',
                    type: 'select',
                    hasMany: false,
                    localized: true,
                    options: [
                        {
                            label: 'France',
                            value: 'france',
                        },
                        {
                            label: 'Germany',
                            value: 'germany',
                        },
                        {
                            label: 'Spain',
                            value: 'spain',
                        },
                    ],
                },
            ],
        },
    ],
}
