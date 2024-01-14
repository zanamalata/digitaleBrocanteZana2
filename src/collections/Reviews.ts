import payload from 'payload'
import { Product, User } from '../payload-types'
import { CollectionConfig, Access } from 'payload/types'
import { equal } from 'assert'

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
    async ({ req: { user } }) => {
        console.log('accesUser:::', user)
        if (!user) return false
        if (user?.role === 'admin') return true

        return {
            user: { equals: user?.id },
        }
    }

const hasPurchased =
    (): Access =>
    async ({ req }) => {
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
                    equals: user.id,
                },
            },
        })
        console.log('UserOrders:::', orders)
        if (orders.totalDocs === 0) return false

        if (user.role === 'admin') return true

        return {
            id: {
                equals: user.id,
            },
        }
    }

const purchasedProducts = async ({ req }: any) => {
    const user = req.user.id
    console.log('productsUser:::', user)

    const purchasedProducts = await payload.find({
        collection: 'orders',
        sort: '_createdAt',
        where: {
            user: { equals: user },
        },
    })
    console.log('PurchasedProducts:::', purchasedProducts)

    return { purchasedProducts }
}
const productIDs = purchasedProducts
console.log('ProductIDS', productIDs)
export const Reviews: CollectionConfig = {
    slug: 'reviews',
    labels: {
        singular: 'Commentaire',
        plural: 'Commentaires',
    },
    admin: {
        defaultColumns: [
            'id',
            'reviewer',
            'review',
            'relatedOrder',
            'relatedProduct',
            'relatedSeller',
            'isApproved',
        ],
        useAsTitle: 'id',
    },
    access: {
        read: () => true,
        // async ({ req }) => {

        //     const referer = req.headers.referer
        // console.log('referrerRead::::', referer)

        //       if (!req.user || !referer?.includes('sell')) {
        //           return true
        //       }
        //       return await isAdminOrHasAccessToReviews()({ req })
        //   },
        create: () => true,
        update: () => true,
        delete: ({ req }) => req.user.role === 'admin',
    },
    hooks: {
        // beforeChange: [
        //     ({ req, data }) => {
        //         console.log('dataBeforeChange::', data)
        //         return { ...data, user: req.user.id }
        //     },
        // ],
        beforeRead: [
            ({ req }) => {
                const user = req.user.id
                console.log('userBeforeRead::', user)
                return { user: { equals: user } }
            },
            purchasedProducts,
            // hasPurchased(),
        ],
    },
    fields: [
        {
            name: 'reviewer',
            type: 'text',
            defaultValue: ({ user }: { user: User }) =>
                user.username ? user.username : user.id,
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
            name: 'relatedOrder',
            label: 'choisissez la commande relative au commentaire',
            type: 'relationship',
            relationTo: 'orders',
        },

        {
            name: 'relatedProduct',
            label: 'Produit relatif au commentaire',
            type: 'relationship',
            relationTo: ['products', 'orders'],
            // filterOptions: 
            // ({relationTo, siblingData}) => {
            //     if (relationTo === 'products') {
            //         return {
            //             id: { equals : siblingData}
            //         }
            //     }
            // }
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
            // filterOptions: (id) => {
            //     console.log('reviewID:::', id)
            //     return {
            //         relatedReview: { equals: id },
            //     }
            // },
        },
        {
            name: 'rating',
            label: 'note associé au commentaire',
            type: 'relationship',
            relationTo: 'ratings',
            filterOptions: (id) => {
                console.log('reviewID:::', id)
                return {
                    relatedReview: { equals: id },
                }
            },
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
