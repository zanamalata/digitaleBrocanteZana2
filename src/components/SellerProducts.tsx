import { Product } from '@/payload-types'
import ProductListing from "./ProductListing"

interface SellerProductsProps  {
  products: (string | Product)[] | null
}

export const SellerProducts = ({products}: SellerProductsProps) => {

  return (
    <>
      <div className="border-t border-slate-200 relative pt-8">
                <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
                    { products && 
                    products.map((item, i) => {
                        if (typeof item === 'string') {
                            return null
                        } else {
                            return (
                                <>
                                    <ProductListing
                                        key={`product-${item.id}`}
                                        product={item}
                                        index={i}
                                    />
                                </>
                            )
                        }
                    })}
                </div>
                    {/* <div className='border-4 content-center justify-center '>
                         <ProductReel
                            title={`produits de ${seller.seller_name}`}
                            button                            
                            query={{
                                limit: 4,
                                
                            }}
                        />
                    </div> */}
            </div>
    </>
  )
}