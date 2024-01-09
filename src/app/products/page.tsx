import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { PRODUCT_CATEGORIES } from '@/config'
import { getPayloadClient } from '@/get-payload'

type Param = string | string[] | undefined

interface ProductsPageProps {
    searchParams: { [key: string]: Param }
}

const parse = (param: Param) => {
    return typeof param === 'string' ? param : undefined
}

const ProductsPage = ({ searchParams }: ProductsPageProps) => {
    const sort = parse(searchParams.sort)
    const category = parse(searchParams.category)
    const subcategory = parse(searchParams.subcategory)

    return (
        <MaxWidthWrapper>
            {/* {PRODUCT_CATEGORIES.map( (item) => {
                return (
                    <div className="mt-20" key={item.label}>
                        <h1 className="text-4xl font-bold text-center">{item.label}</h1>
                        {item.featured.map((feature) => (
                            <ProductReel
                            key={feature.value}
                            title={feature.name}
                            query={{
                                subcategory: feature.name,
                                limit: 4,
                                sort:
                                    sort === 'desc' || sort === 'asc'
                                        ? sort
                                        : undefined,
                            }}
                        />
                        ))}
                    </div>
                )
            })} */}

            {PRODUCT_CATEGORIES.map((category) => (
                <ProductReel
                    key={category.value}
                    title={category.label}
                    query={{
                    category: category.value,
                        limit: 4,
                        sort:
                            sort === 'desc' || sort === 'asc'
                                ? sort
                                : undefined,
                    }}
                />
            ))}
        </MaxWidthWrapper>
    )
}

export default ProductsPage
