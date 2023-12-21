import { getPayloadClient } from "@/get-payload"

interface SellerPageProps {
  params: {
    sellerId: string
  }
}

const BREADCRUMBS = [
  { id: 1, name: 'Home', href: '/'},
  { id: 2, name: 'Seller', href: '/sellers'},
]

const SellerPage = async ({params}: SellerPageProps) => {

  const { sellerId } = params

  const payload = await getPayloadClient()

  const {docs: sellers } = await payload.find({
    collection: 'users',
    limit: 1,
    where: {
      id: {
        equals: sellerId,
      },
      role: {
        equals: 'seller',
      }
    }
  })

  const [seller] = sellers
}

// TODO finish validUrls

export default SellerPage