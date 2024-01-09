import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductListing from '@/components/ProductListing'
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

    const [seller] = await sellers

    const products = seller?.products || []

    // const [product] = products.map((value) => {
    //     if (typeof value === 'string') {
    //         return {
    //             // add default product fields here
    //         } as Product
    //     } else {
    //         return value
    //     }
    // })

    // console.log('products::::', products)
    // const productNames = products.map((product) => {
    //     if (typeof product === 'string') {
    //         return null
    //     } else {
    //         return product.name
    //     }
    // })
    // console.log('productnames:::::', productNames)
    // const { docs: products } = await payload.find({
    //     collection: 'products',
    //     where: {
    //         user: {
    //             equals: seller.id,
    //         },
    //         approvedForSale: {
    //             equals: 'approved',
    //         },
    //     },
    // })

    // const [product] = products
    // console.log('products:::', products)

    // const validUrls = product.images
    //     .map(({ image }) => (typeof image === 'string' ? image : image.url))
    //     .filter(Boolean) as string[]

    // console.log('URLS////', validUrls)
    return (
        <MaxWidthWrapper>
            <div className="relative top-10">
                <div className="relative h-96 mt-6 bg-slate-200 rounded-t-md border border-slate-300">
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
                            src={'/banner14.png'}
                            alt="shop banner"
                            className="rounded-t-md"
                            fill
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                        />
                    )}
                </div>
                <div className="relative p-2 w-fit -top-20 flex flex-col items-center">
                    <div className=" rounded-full border border-slate-300 h-40 w-48  ">
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
                    <p className="relative w-fit top-16 px-4 py-2 text-2xl font-medium rounded-md border border-slate-200 bg-slate-100">
                        {seller.seller_activity}
                    </p>
                </div>
            </div>

            <div className="relative flex flex-col -top-44 justify-center items-center">
                <h1 className="text-6xl font-bold underline">
                    {seller.seller_name}
                </h1>
                <p className="mt-12 text-xl">{seller.seller_description}</p>
            </div>

            <div className="border-t border-slate-200 relative -top-8 pt-8">
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                    {products.map((product, i) => {
                        if (typeof product === 'string') {
                            return null
                        } else {
                            return (
                                <ProductListing
                                    key={`product-${product.id}`}
                                    product={product}
                                    index={i}
                                />
                            )
                        }
                    })}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}

export default Page
