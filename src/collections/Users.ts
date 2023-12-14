import { PrimaryActionEmailHtml } from '../components/emails/PrimaryActionEmail'
import { Access, CollectionConfig } from 'payload/types'

const adminsAndUser: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true

    return {
        id: {
            equals: user.id,
        },
    }
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
        create: () => true,
        update: ({ req }) => req.user.role === 'admin',
        delete: ({ req }) => req.user.role === 'admin',
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
        defaultColumns: ['id'],
    },
    fields: [
        {
            name: 'name',
            label: 'Nom du vendeur ou de la boutique',
            type: 'text',
            admin: {
                condition: () => true,
                description: 'Le nom du vendeur ou de la boutique',
            },
            required: false,
        },
        {
            name: 'description',
            label: 'Description du vendeur ou de la boutique',
            type: 'textarea',
            admin: {
                condition: () => true,
                description:
                    'Pour embellir votre boutique donner une description de votre boutique',
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
            type: 'select',
            options: [
                { label: 'Admin', value: 'admin' },
                { label: 'User', value: 'user' },
            ],
        },
        {
            name: 'products',
            label: 'Products',
            admin: {
                condition: () => true,
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
            unique: true,
            admin: {
                description:
                    'Chers vendeurs, afin que votre boutique soit agéable à regarder, nous vous invitons à uploader un logo ou une photo pour votre boutique',
            },

            fields: [
                {
                    name: 'photo',
                    type: 'upload',
                    label: 'ajouter une photo',
                    relationTo: 'photo',
                    required: false,
                    admin: {
                        description:
                            'vendeurs vous pouvez rajouté une photo pour illustrer votre boutique',
                    },
                },
            ],
        },
    ],
}
