// TODO add shipment collection

import { timeStamp } from 'console'
import { Access, CollectionConfig } from 'payload/types'

const yourOwn: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true

    return {
        user: {
            equals: user?.id,
        },
    }
}

export const Orders: CollectionConfig = {
    slug: 'orders',
    labels: {
        singular: 'Votre commande',
        plural: 'Vos commandes',
    },
    admin: {
        defaultColumns: ['user', 'products', '_createdAt', '_isPaid'],
        description:
            'Un récapitulatif de toutes vos commandes sur DigitalBrocante.',
    },
    access: {
        read: yourOwn,
        update: ({ req }) => req.user.role === 'admin',
        delete: ({ req }) => req.user.role === 'admin',
        create: ({ req }) => req.user.role === 'admin',
    },
    fields: [
        {
            name: '_isPaid',
            type: 'checkbox',
            access: {
                read: ({ req }) => req.user.role === 'admin',
                create: () => false,
                update: () => false,
            },
            admin: {
                hidden: true,
            },
            required: true,
        },
        {
            name: 'user',
            type: 'relationship',
            admin: {
                hidden: true,
            },
            relationTo: 'users',
            required: true,
        },
        {
            name: 'products',
            type: 'relationship',
            relationTo: 'products',
            required: true,
            hasMany: true,
            // admin: {
            //   sortOptions: 'name'
            // },
        },
    ],
}
