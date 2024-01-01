import { Products } from '@/collections/Products/products'
import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { getPayloadClient } from '@/get-payload'
import Image from 'next/image'

interface PageProps {
    params: {
        sellerId: string
    }
}

const BREADCRUMBS = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: 'Seller', href: '/sellers' },
]

const Page = async ({ params }: PageProps) => {
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

    const { docs: products } = await payload.find({
        collection: 'products',
        where: {
            user: {
                equals: seller.id,
            },
            approvedForSale: {
                equals: 'approved'
            }
        },
    })

const [product] = products


    return (
        <MaxWidthWrapper>
            <div className="relative top-10">
                <div className="relative h-72 mt-20 bg-slate-200 rounded-t-md border border-slate-300">
                    {seller.banner && typeof seller.banner === 'string' ? (
                        <Image
                            src={seller.banner}
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
                <div className="w-fit pr-6 flex flex-col items-center">
                    <div className="relative rounded-full border border-slate-300 h-40 w-40 -top-6 ml-6 ">
                        {seller.photo && typeof seller.photo === 'string' ? (
                            <Image
                                src={seller.photo}
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
                    <p className="relative w-fit ml-6 -mt-4 px-4 py-1 text-2xl font-medium rounded-md border border-slate-200 bg-slate-100">
                        {seller.seller_activity}
                    </p>
                </div>
            </div>
            <div className="relative flex flex-col -top-24 justify-center items-center">
                <h1 className="text-6xl font-bold underline">
                    {seller.seller_name}
                </h1>
                <p className="mt-12 text-xl">{seller.seller_description}</p>
            </div>
            <ProductReel
                title={`Produits de ${seller.seller_name}`}
                query={{ sort: 'asc' }}
            />
        </MaxWidthWrapper>
    )
}

export default Page
