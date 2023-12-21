
import { getPayloadClient } from '@/get-payload';
import { Suspense } from 'react';
import SellerCard from './SellerCard';

export default async function SellerCarousel() {
  
  const payload = await getPayloadClient()

  const {docs: sellers} = await payload.find({
    collection: 'users',
    limit: 1,
    where: {
      role: {
        equals: 'seller',
      },
    }
  })

  return (
    <div className="overflow-clip">
      <div className="mx-auto mt-4 w-fit rounded-lg border-2 border-green-6 bg-green-2 dark:border-greendark-6 dark:bg-greendark-2">
        <h3 className="m-3 mx-6 text-2xl font-bold">Visitez les boutiques</h3>
      </div>
      <ul className="m-4 flex animate-carousel gap-4">
        <Suspense fallback={<div>Chargement...</div>}>
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </Suspense>
      </ul>
    </div>
  );
}