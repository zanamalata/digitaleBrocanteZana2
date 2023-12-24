
import { isAdmin } from "../access/IsAdmin";
import { isAdminOrSelf } from "../access/IsAdminOrSelf";
import { CollectionConfig } from "payload/types";

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
    delete: isAdmin,
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
