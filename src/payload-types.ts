/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    products: Product;
    media: Media;
    orders: Order;
    photo: Photo;
    banner: Banner;
    reviews: Review;
    reviewsreply: Reviewsreply;
    ratings: Rating;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  globals: {};
}
export interface User {
  id: string;
  products?: (string | Product)[] | null;
  orders?: (string | Order)[] | null;
  role: ('admin' | 'user' | 'seller')[];
  username?: string | null;
  seller_name?: string | null;
  seller_activity?: string | null;
  seller_description?: string | null;
  photo?: string | Media | null;
  banner?: string | Media | null;
  address?: Address;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  _verified?: boolean | null;
  _verificationToken?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password: string | null;
}
export interface Product {
  id: string;
  user?: (string | null) | User;
  name: string;
  description?: string | null;
  price: number;
  reducedPrice?: number | null;
  priceAfterCommission?: string | null;
  category: 'arts' | 'culture' | 'creations' | 'deco' | 'luminaires' | 'artsdelatable' | 'textiles_et_bijoux' | 'kids';
  subcategory: string;
  images: {
    image: string | Media;
    id?: string | null;
  }[];
  approvedForSale?: ('pending' | 'approved' | 'denied') | null;
  ShipmentStatus?: ('notSent' | 'pending' | 'received' | 'denied' | 'accepted') | null;
  priceId?: string | null;
  stripeId?: string | null;
  updatedAt: string;
  createdAt: string;
}
export interface Media {
  id: string;
  user?: (string | null) | User;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Order {
  id: string;
  _isPaid: boolean;
  user: string | User;
  products: (string | Product)[];
  updatedAt: string;
  createdAt: string;
}
export interface Address {
  firstname?: string | null;
  lastname?: string | null;
  address1?: string | null;
  address2?: string | null;
  postcode?: number | null;
  city?: string | null;
  country?: ('france' | 'germany' | 'spain') | null;
}
export interface Photo {
  id: string;
  user?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    photo?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Banner {
  id: string;
  user?:
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'media';
        value: string | Media;
      } | null);
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  sizes?: {
    banner?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
export interface Review {
  id: string;
  reviewer?: string | null;
  review?: string | null;
  relatedOrder?: (string | null) | Order;
  relatedProduct?:
    | ({
        relationTo: 'products';
        value: string | Product;
      } | null)
    | ({
        relationTo: 'orders';
        value: string | Order;
      } | null);
  relatedSeller?: (string | null) | User;
  reviewReply?: (string | null) | Reviewsreply;
  rating?: (string | null) | Rating;
  isApproved?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
export interface Reviewsreply {
  id: string;
  author?: string | null;
  reviewReply?: string | null;
  relatedReview?: (string | null) | Review;
  relatedSeller?: (string | null) | User;
  relatedProduct?: (string | null) | Product;
  updatedAt: string;
  createdAt: string;
}
export interface Rating {
  id: string;
  author?: string | null;
  ratings?: ('1' | '2' | '3' | '4' | '5') | null;
  username?: (string | null) | User;
  relatedSeller?: (string | null) | User;
  relatedOrder?: (string | null) | Order;
  relatedProduct?: (string | null) | Product;
  relatedReview?: (string | null) | Review;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}