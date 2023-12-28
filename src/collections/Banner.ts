import { Access, CollectionConfig } from "payload/types";

export const isAdminOrSelf: Access = ({ req: { user } }) => {
  // Need to be logged in
  if (user) {
    // If user has role of 'admin'
    if (user.roles?.includes('admin')) {
      return true;
    }

    // If any other type of user, only provide access to themselves
    return {
      id: {
        equals: user.id,
      }
    }
  }

  // Reject everyone else
  return false;
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
    read: isAdminOrSelf,
    update: isAdminOrSelf,
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
        name: 'thumbnail',
        width: 400,
        height: undefined,
        position: "centre",
        withoutEnlargement: false,
      },
      {
        name: 'card',
        width: 768,
        position: "centre",
        withoutEnlargement: false,
      },
      {
        name: 'tablet',
        width: 1024,
        position: "centre",
        withoutEnlargement: false,
      },
      {
        name: 'fullHD',
        width: 1920,
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
