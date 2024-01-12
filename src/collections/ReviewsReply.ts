import { User } from '../payload-types'
import { Access, CollectionConfig } from 'payload/types'

const adminsAndReviewedSeller: Access = ({ req: { user }, req: {payload}}) => {
    if (user.role === 'admin') return true

    if (user.role === 'seller') return true
    // console.log('user:::', user, 'payloadCollections::::', payload.collections.reviews.config.fields)

    return {
        id: {
            equals: user.id,
        },
    }
}

export const ReviewsReply: CollectionConfig = {
    slug: 'reviewsreply',
    labels: {
        singular: 'Réponse au commentaire',
        plural: 'Réponses aux commentaires',
    },
    admin: {
        defaultColumns: ['id', 'author', 'isApproved', 'content'],
        useAsTitle: 'id',
    },
    access: {
        read: adminsAndReviewedSeller,
        create: adminsAndReviewedSeller,
        update: adminsAndReviewedSeller,
        delete: ({ req }) => req.user.role === 'admin',
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
            name: 'reviewReply',
            label: 'Réponse au commentaire',
            type: 'textarea',
        },
        {
            name: 'relatedReview',
            label: 'réponse à ce commentaire',
            type: 'relationship',
            relationTo: 'reviews',
        },
        {
            name: 'relatedSeller',
            label: 'réponse au vendeur',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'relatedProduct',
            label: 'A Proppos de ce produit',
            type: 'relationship',
            relationTo: 'products',
        },
    ],
}
