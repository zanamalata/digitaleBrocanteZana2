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

export const Account: CollectionConfig = {
    slug: 'account',
    access: {
        read: adminsAndUser,
        create: () => true,
        update: ({ req }) => req.user.role === 'admin',
        delete: ({ req }) => req.user.role === 'admin',
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
                    min: 4,
                    max: 8,
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
            ],
        },
    ],
}
