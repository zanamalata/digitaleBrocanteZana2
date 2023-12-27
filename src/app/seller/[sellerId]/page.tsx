import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import { getPayloadClient } from '@/get-payload'
import Image from 'next/image'

interface SellerPageProps {
    params: {
        sellerId: string
    }
}

const BREADCRUMBS = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Seller', href: '/sellers' },
]

const SellerPage = async ({ params }: SellerPageProps) => {
    const { sellerId } = params

    const payload = await getPayloadClient()

    const { docs: sellers } = await payload.find({
        collection: 'users',
        limit: 1,
        where: {
            id: {
                equals: sellerId,
            },
            role: {
                equals: 'seller',
            },
        },
    })

    const [seller] = sellers

    // let imageSrc = '' as string
    // if (
    //     typeof seller.banner === 'object' &&
    //     seller.banner?.hasOwnProperty('url') &&
    //     seller.banner.url !== undefined
    // ) {
    //     imageSrc = seller.banner.url as string
    // }

    return (
        <MaxWidthWrapper>
            <div className="relative top-10">
                <div className="relative h-72 mt-20 bg-slate-200 rounded-t-md border border-slate-300">
                    {seller.banner && typeof seller.banner === 'object' ? (
                        <Image
                            src={(seller.banner as { url: string }).url}
                            alt="shop banner"
                            className="rounded-t-md"
                            fill
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    ) : (
                        <Image
                            src={'/banner.jpg'}
                            alt="shop banner"
                            className="rounded-t-md"
                            fill
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    )}
                </div>
                <div className="relative rounded-full border border-slate-300 h-40 w-40 -top-6 ml-6 ">
                    {seller.photo && typeof seller.photo === 'object' ? (
                        <Image
                            src={(seller.photo as { url: string }).url}
                            alt="shop banner"
                            className="rounded-full"
                            fill
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    ) : (
                        <Image
                            src={'/blank-avatar-photo.webp'}
                            alt="shop banner"
                            className="rounded-full"
                            fill
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    )}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default SellerPage
