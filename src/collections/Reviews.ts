import payload from 'payload'
import { User } from '../payload-types'
import { CollectionConfig, Access } from 'payload/types'

const yourOwn: Access = ({ req: { user } }) => {
    if (user.role === 'admin') return true

    return {
        user: {
            equals: user?.id,
        },
    }
}

const isAdminOrHasAccessToReviews =
    (): Access =>
    async ({ req }) => {
        const user = req.user as User | undefined

        if (!user) return false
        if (user.role === 'admin') return true

        return {
            relatedUser: {
                equals: user.id,
            },
        }
    }
    
    const hasPurchased = (): Access => async ({req}) => {
        // const [orders] = req.payload.collections.orders.config.fields
        // // console.log('orders:::', orders)

        // console.log('collectionsfields::::',req.payload.collections.orders.config.fields.find((user) => user))
        // if (orders.type.includes('checkbox') === false) return false

        
        const user = req.user as User | undefined
        if (!user) return false
        
        const orders = await payload.find({
            collection: 'orders',
            where: {
                user: {
                    equals: user.id
                }
            }
        })
        console.log('UserOrders:::', orders)


        if (user.role === 'admin') return true

        return {
            id: {
                equals: user.id,
            },
        }
    }

export const Reviews: CollectionConfig = {
    slug: 'reviews',
    labels: {
        singular: 'Commentaire',
        plural: 'Commentaires',
    },
    admin: {
        defaultColumns: ['id', 'author', 'isApproved', 'content'],
        useAsTitle: 'id',
    },
    access: {
        read: isAdminOrHasAccessToReviews(),
        // async ({ req }) => {

        //     const referer = req.headers.referer

        //       if (!req.user || !referer?.includes('sell')) {
        //           return true
        //       }
        //       return await isAdminOrHasAccessToReviews()({ req })
        //   }
        create: hasPurchased(),
        update: ({ req }) => req.user.role === 'admin',
        delete: () => true,
    },
    hooks: {
        beforeChange: [
            ({ req, data }) => {
                console.log('dataBeforeChange::', data)
                return { ...data, user: req.user.id }
            },
        ],
        beforeRead: [
            ({ req }) => {
                const user = req.user.id
                console.log('userBeforeRead::', user)
                return { user: req.user.id }
            },
            hasPurchased(),
        ],
    },
    fields: [
        {
            name: 'author',
            type: 'text',
            defaultValue: ({ user }: { user: User }) => user.username,
            admin: {
                readOnly: true,
            },
        },
        {
            name: 'review',
            label: 'Commentaire',
            type: 'textarea',
        },
        {
            name: 'relatedUser',
            label: 'Utilisateur qui a commenté',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'relatedOrder',
            label: 'Commande commenté',
            type: 'relationship',
            relationTo: 'orders',
        },
        {
            name: 'relatedProduct',
            label: 'Produit commenté',
            type: 'relationship',
            relationTo: 'products',
        },
        {
            name: 'relatedSeller',
            label: 'vendeur commenté',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'reviewReply',
            label: 'Réponse au commentaire',
            type: 'relationship',
            relationTo: 'reviewsreply',
        },
        {
            name: 'rating',
            label: 'note associé au commentaire',
            type: 'relationship',
            relationTo: 'ratings',
        },
        {
            name: 'isApproved',
            type: 'checkbox',
            defaultValue: false,
        },
    ],
    timestamps: true,
    // addCommentPath: '/add-comment',
    // addCommentMethod: 'post',
    // hasPublishedCommentPath: '/has-published-comment',
    // hasPublishedCommentMethod: 'post',
    // hasPublishedCommentFields: ['email'],
    // collectionsAllowingComments: [],
    // sendAlert: false,
    // alertRecipients: [],
    // alertFrom: '',
    // alertSubject: 'Your site received a new comment',
    // alertIntro: '<p>Your site received the following comment.</p>',
    // alertClosing: '<p>Please log in to review, approve, or delete this comment.</p>',
    // alertEditUrlBase: '',
    // autoPublish: false,
    // autoPublishConditions: [],
    // additionalEndpoints: [],
}
