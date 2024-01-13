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
            label: 'Commande commenté',
            type: 'relationship',
            relationTo: 'orders',
        },
        {
            name: 'productReviewed',
            label: 'produit commenté',
            type: 'select',
            hooks: {
                afterRead : [
                    async ({ req }) => {
                        const user = req.user.id
                        console.log('productsUser:::', user)

                        const purchasedProducts = await payload.find({
                            collection: 'orders',
                            where: {
                                user: {equals: user }
                            }          
                        })
                        console.log('PurchasedProducts:::', purchasedProducts)
                        
                        purchasedProducts.docs.map((item) => (
                            item.products.map((product) => (
                              console.log('product:::', product)
                              
                            ))
                            
                        ))
                    }
                    
                ],
            },
            options: [
                {
                    value: '1',
                    label: '1',
                },
                {
                    value: '2',
                    label: '2',
                },
             ],
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
