import { User } from "../payload-types";
import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === 'admin') return true

  return {
    id: {
      equals: user.id,
    },
  }
}

export const Photo: CollectionConfig = {
  slug: "photo",
  hooks: {
    beforeChange: [
      ({ req }) => {
        
        return { user: req.user.id };
      },
    ],
  },
  access: {
    create: adminsAndUser,
    read: adminsAndUser,
    update: adminsAndUser,
    delete: ({req}) => req.user.role === 'admin',
  },

  admin: {
    hidden: ({user}) => user.role !== "admin"
  },
  upload: {
    staticURL: "/photo",
    staticDir: "",
    imageSizes: [
      {
        name: 'photo',
        width: 400,
        height: 300,
        position: "centre",
        withoutEnlargement: false,
      },
      
    ],
    mimeTypes: ['image/*'],
    
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: ["users", "media"],
      required: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
