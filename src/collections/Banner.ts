import { Access, CollectionConfig } from "payload/types";

const adminsAndUser: Access = ({ req: { user } }) => {
  if (user.role === 'admin') return true

  return {
    id: {
      equals: user.id,
    },
  }
}

export const Banner: CollectionConfig = {
  slug: "banner",
  hooks: {
    beforeChange: [
      ({ req }) => {
        
        return { user: req.user.id };
      },
    ],
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: ({req}) => req.user.role === 'admin',
  },

  admin: {
    hidden: ({user}) => user.role !== "admin"
  },
  upload: {
    staticURL: "/banner",
    staticDir: "",
    imageSizes: [
      {
        name: 'banner',
        width: 1920,
        height: undefined,
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
