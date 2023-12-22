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

    // TODO finish validUrls

    return (
        <MaxWidthWrapper>
            <div className="h-72 bg-slate-200">
                <Image
                    src={
                        typeof seller.Photo === 'string'
                            ? seller.Photo
                            : ''
                    }
                    alt='shop banner'
                />
            </div>
        </MaxWidthWrapper>
    )
}

export default SellerPage
