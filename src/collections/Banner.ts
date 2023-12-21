import { User } from "../payload-types";
import { Access, CollectionConfig } from "payload/types";

// a function to be sure only admin and user who own the image can access to it
const isAdminOrHasAccessToImages = (): Access => async ({
  req
}) => {
  const user = req.user as User | undefined 

  if(!user) return false
  if(user.role === "admin") return true

  return {
    user: {
      equals: req.user.id
    }
  }
}

export const Banner: CollectionConfig = {
  slug: "banner",
  hooks: {
    beforeChange: [
      ({ req, data }) => {
        return { ...data, user: req.user.id };
      },
    ],
  },
  access: {
    read: async ({req}) => {
      const referer = req.headers.referer

      if(!req.user || !referer?.includes("sell")) {
        return true
      }
      return await isAdminOrHasAccessToImages()({ req })
    },
    delete: isAdminOrHasAccessToImages(),
    update: isAdminOrHasAccessToImages(),
  },
  admin: {
    hidden: ({user}) => user.role !== "admin"
  },
  upload: {
    staticURL: "/media/banner",
    staticDir: "media/banner",
    imageSizes: [
      {
        name: 'fullHd',
        width: 1920,
        height: 450,
        position: "centre",
      },
    ],
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
      unique: true,
      hasMany: false,
      admin: {
        condition: () => false,
      },
    },
  ],
};
