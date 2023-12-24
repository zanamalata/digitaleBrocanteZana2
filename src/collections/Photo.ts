
import { isAdmin } from "../access/IsAdmin";
import { isAdminOrSelf } from "../access/IsAdminOrSelf";
import { CollectionConfig } from "payload/types";

export const Photo: CollectionConfig = {
  slug: "photo",
  hooks: {
    beforeChange: [
      ({ req }) => {
        console.log('ReqUser:::::', req.user)
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
