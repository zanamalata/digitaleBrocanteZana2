import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { PRODUCT_CATEGORIES } from '@/config'
import { getPayloadClient } from '@/get-payload'
import { equal } from 'assert'
import payload from 'payload'

type Param = string | string[] | undefined

interface ProductsPageProps {
    searchParams: { [key: string]: Param }
}

const parse = (param: Param) => {
    return typeof param === 'string' ? param : undefined
}

const ProductsPage = async ({ searchParams }: ProductsPageProps) => {
    const sort = parse(searchParams.sort)
    const category = parse(searchParams.category)

    const payload = await getPayloadClient()

    // TODO: find the proper value

    // const label = PRODUCT_CATEGORIES.find(
    //   ({ value }) => value === value
    // )?.label
    // console.log('label::::', label)

    return (
        <MaxWidthWrapper>
            {PRODUCT_CATEGORIES.map(async (item) => {
                // const category = item.featured.map((item) => item.value)
                const category = 'vetements'
                console.log('category::::', category)

                const { docs: products } = await payload.find({
                    collection: 'products',
                    where: {
                        category: {
                            equals: item.value,
                        },
                    },
                })
                console.log('products::::', products)

                return (
                    <ProductReel
                        key={item.label}
                        title={item.label}
                        query={{
                            category,
                            limit: 40,
                            sort:
                                sort === 'desc' || sort === 'asc'
                                    ? sort
                                    : undefined,
                        }}
                    />
                )
            })}

            <ProductReel
                title={'Parcourir les produits'}
                query={{
                    category,
                    limit: 40,
                    sort: sort === 'desc' || sort === 'asc' ? sort : undefined,
                }}
                href="/products?category=vetements"
            />
        </MaxWidthWrapper>
    )
}

export default ProductsPage
