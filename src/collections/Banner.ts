import { User } from '../payload-types'
import { Access, CollectionConfig } from 'payload/types'

// a function to be sure only admin and user who own the image can access to it
const isAdminOrHasAccessToImages =
    (): Access =>
    async ({ req }) => {
        const user = req.user as User | undefined

        if (!user) return false
        if (user.role === 'admin') return true

        return {
            user: {
                equals: req.user.id,
            },
        }
    }

export const Banner: CollectionConfig = {
    slug: 'banner',
    hooks: {
        beforeChange: [
            ({ req, data }) => {
              console.log('DATABanner::::', data)
                return { ...data, user: req.user.id }
            },
        ],
        beforeOperation: [
          async ({collection: Users, operation}) => {}
        ],
    },
    access: {
        read: () => true,
        delete: () => true,
        update: () => true,
    },
    admin: {
        hidden: ({ user }) => user.role !== 'admin',
    },
    upload: {
        staticURL: 'banner',
        staticDir: '/banner',
        imageSizes: [
            {
                name: 'fullHd',
                width: 1920,
                height: 450,
                position: 'centre',
            },
        ],
        mimeTypes: ['image/*'],
    },
    fields: [
        {
            name: 'user',
            type: 'relationship',
            relationTo: 'users',
            required: false,
            hasMany: false,
            admin: {
                condition: () => false,
            },
        },
    ],
}
