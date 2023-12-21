import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig, FieldAccess } from 'payload/types'

const adminsAndUser: Access = ({ req: { user } }) => {
    return {
        id: {
            equals: user.id,
        },
    }
}

const admins: FieldAccess = ({ req: {user}}) => {
    if (user.role === 'admin') return true
    else return false
}

const adminsAndSeller: FieldAccess = ({ req: { user } }) => {
    if (user.role === 'admin') return true
    else if (user.role === 'seller') return true
    return false
}

// TODO change domain name in resend when got own domain
export const Users: CollectionConfig = {
    slug: 'users',
    auth: {
        verify: {
            generateEmailHTML: ({ token }) => {
                return PrimaryActionEmailHtml({
                    actionLabel: 'Verify your account',
                    buttonText: 'verify account',
                    href: `${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}`,
                })
            },
        },
    },
    access: {
        read: adminsAndUser,
        create: adminsAndUser,
        update: adminsAndUser,
        delete: ({ req }) => req.user.role === 'admin',
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
        defaultColumns: ['id'],
    },
    fields: [
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
                description: "Nom d'utilisateur: le nom que verrons les autres utilisateurs de la plateforme",
            }
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
            required: false,
        },
        {
            name: 'seller_description',
            label: 'Description du vendeur ou de la boutique',
            type: 'textarea',
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
            required: false,
        },
        // {
        //   name: "product_files",
        //   label: "Product files",
        //   admin: {
        //     condition: () => false,
        //   },
        //   type: "relationship",
        //   relationTo: "product_files",
        //   hasMany: true,
        // },
        {
            name: 'role',
            required: true,
            defaultValue: 'user',
            admin: {
                condition: () => true,
            },
            access: {
                read: () => true,
                create: admins,
                update: admins,
            },
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
                { label: 'Seller', value: 'seller' },
            ],
        },
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
        {
            name: 'Photo',
            type: 'array',
            label: 'Photo du profil',
            minRows: 1,
            maxRows: 1,
            required: false,
            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                description:
                    'Chers vendeurs, afin que votre boutique soit agéable à regarder, nous vous invitons à uploader un logo ou une photo pour votre boutique',
            },
            fields: [
                {
                    name: 'photo',
                    type: 'upload',
                    label: 'Ajouter une photo',
                    relationTo: 'photo',
                    required: false,
                    admin: {
                        description:
                            'vendeurs vous pouvez rajouté une photo pour illustrer votre boutique',
                    },
                },
            ],
        },
        {
            name: 'Banner',
            type: 'array',
            label: 'Banniere de la boutique',
            minRows: 1,
            maxRows: 1,
            required: false,
            access: {
                create: adminsAndSeller,
                read: adminsAndSeller,
                update: adminsAndSeller,
            },
            admin: {
                description:
                    'Chers vendeurs, afin que votre boutique soit agéable à regarder, nous vous invitons à uploader une bannière pour votre boutique',
            },

            fields: [
                {
                    name: 'banner',
                    type: 'upload',
                    label: 'Ajouter une bannière',
                    relationTo: 'banner',
                    required: false,
                    admin: {
                        description:
                            'vendeurs vous pouvez rajouté une bannière pour illustrer votre boutique',
                    },
                },
            ],
        },
        {
            name: 'firstname',
            label: "Votre prénom",
            type: 'text',
            access: {
                create: () => true,
                read: () => true,
                update: () => true,
            },
            admin: {
                placeholder: 'Prénom',
            }
        },
        {
            name: 'lastname',
            label: "Votre nom",
            type: 'text',
            access: {
                create: () => true,
                read: () => true,
                update: () => true,
            },
            admin: {
                placeholder: 'Nom',
            }
        },
        // TODO changement d'adresse
        {
            name: 'adress1',
            label: 'Adresse',
            type: 'text',
            required: false,
            access: {
                create: () => true,
                read: () => true,
                update: () => true,
            },
            admin: {
                condition: () => true,
            },
        },
        {
            name: 'adress2',
            label: "Complément d'adresse",
            type: 'text',
            required: false,
            access: {
                create: () => true,
                read: () => true,
                update: () => true,
            },
            admin: {
                condition: () => true,
            },
        },
        {
            name: 'city',
            label: 'Ville',
            type: 'text',
            required: false,
            admin: {
                condition: () => true,
            },
        },
        {
            // TODO add validate only number if locale is fr
            name: 'postcode',
            label: 'Code postal',
            type: 'number',
            required: false,
            admin: {
                condition: () => true,
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
}
