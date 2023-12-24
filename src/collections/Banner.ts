
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
        name: 'banner',
        width: 1920,
        height: 700,
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
