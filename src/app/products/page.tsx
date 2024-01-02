import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { PRODUCT_CATEGORIES } from '@/config'
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
    // const category = parse(searchParams.category)

    // TODO: find the proper value

    // const label = PRODUCT_CATEGORIES.find(
    //   ({ value }) => value === value
    // )?.label
    // console.log('label::::', label)
    

    

    return (
        <MaxWidthWrapper>
            {PRODUCT_CATEGORIES.map((item) => (
                <ProductReel
                    key={item.label}
                    title={item.label}
                    query={{
                        // category: item.featured.forEach((item) => item.value),
                        limit: 40,
                        sort:
                            sort === 'desc' || sort === 'asc'
                                ? sort
                                : undefined,
                    }}
                />
            ))}

            <ProductReel
                title={'Parcourir les produits'}
                query={{
                    // category,
                    limit: 40,
                    sort: sort === 'desc' || sort === 'asc' ? sort : undefined,
                }}
            />
        </MaxWidthWrapper>
    )
}

export default ProductsPage
