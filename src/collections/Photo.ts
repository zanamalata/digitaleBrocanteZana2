
import { isAdmin } from "../access/IsAdmin";
import { isAdminOrSelf } from "../access/IsAdminOrSelf";
import { User } from "../payload-types";
import { Access, CollectionConfig } from "payload/types";

// a function to be sure only admin and user who own the image can access to it
const isAdminOrHasAccessToImages = (): Access => async ({
  req
}) => {
  const user = req.user as User | undefined 

  if(!user) return false
  if(user.role === "admin") return true
console.log('userPHOTO:::', user.photo)
  return {
    user: {
      equals: req.user.id
    }
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
    read: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
    delete: isAdminOrSelf,
  },

  admin: {
    hidden: ({user}) => user.role !== "admin"
  // hidden: () => false,
  },
  upload: {
    staticURL: "/photo",
    staticDir: "",
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: "centre",
        withoutEnlargement: false,
      },
      
    ],
    mimeTypes: ['image/*'],
    
  },
  fields: [
    // {
    //   name: "photo",
    //   type: "relationship",
    //   relationTo: "photo",
    //   label: 'user Id',
    //   required: true,
    //   hasMany: false,
    //   admin: {
    //     condition: () => true,
    //   },
    // },
    {
      name: "user",
      type: "relationship",
      relationTo: ["users", "photo"],
      required: true,
      hasMany: false,
      admin: {
        condition: () => true,
      },
    },
    {
      name: 'alt',
      type: "text",
    }
  ],
};
