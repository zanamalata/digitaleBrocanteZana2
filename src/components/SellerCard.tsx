'use client'

import { User } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'

// interface Seller {
//     id: string;
//     seller_name: string;
//     photo: {
//       url: string;
//     } | null;
//     seller_activity: string;
//   }

  
  // TODO find proper array of avatars
const SellerCard = ({ seller }: { seller: User }) => {
    console.log('seller::::', seller.photo)
    return (
        <Link
            href={`/seller/${seller.id}`}
            className="group m-4 bg-green-3 hover:scale-105 hover:bg-green-4"
        >
            <li
                key={seller.id}
                className="flex aspect-square h-[22vh] flex-col items-center rounded border border-green-7 p-2 hover:border-green-8 lg:h-[24vh] lg:w-52"
            >
                <p className="m-auto h-8 whitespace-break-spaces text-center font-medium">
                    {seller.seller_name}
                </p>
                {seller.photo &&
                    typeof seller.photo === 'object' &&
                    seller.photo.url && (
                        <Image
                            src={seller.photo.url}
                            alt="Photo du vendeur ou logo de la boutique"
                            width={100}
                            height={50}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                            className="h-[12vh] w-48 rounded object-cover grayscale-[50%] group-hover:grayscale-0 lg:h-[15vh] lg:w-52 "
                        />
                    )}
                <p className="m-auto h-8 whitespace-break-spaces text-center font-medium">
                    {seller.seller_activity}
                </p>
            </li>
        </Link>
    )
}

export default SellerCard
