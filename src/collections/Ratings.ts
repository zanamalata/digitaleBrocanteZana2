import { User } from '@/payload-types'
import { CollectionConfig } from 'payload/types'

export const Ratings: CollectionConfig = {
    slug: 'ratings',
    labels: {
      singular: 'Note',
      plural: 'Notes',
  },
  admin: {
    defaultColumns: ['id', 'author', 'isApproved', 'content'],
    useAsTitle: 'id',
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
        name: 'ratings',
        type: 'radio',
        options: [
          {
           value: '1',
           label: 'one',
          },
          {
            value: '2',
            label: 'two',
           },

           {
            value: '3',
            label: 'three',
           },{
            value: '4',
            label: 'four',
           },
           {
            value: '5',
            label: 'five',
           },
        ],
      },
        {
            name: 'username',
            label: "Nom d'utilsateur qui avise",
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'relatedSeller',
            label: 'Nom du vendeur avisé',
            type: 'relationship',
            relationTo: 'users',
        },
        {
            name: 'relatedOrder',
            label: " Depui quelle commande avise l'utilisateur",
            type: 'relationship',
            relationTo: 'orders',
        },
        {
            name: 'relatedProduct',
            label: 'Nom du produit avisé',
            type: 'relationship',
            relationTo: 'products',
        },
        {
            name: 'relatedReview',
            label: 'Commentaire rattaché au vote',
            type: 'relationship',
            relationTo: 'reviews',
        },
    ],
}
