import { Products } from "@/collections/Products/products";
import ProductReel from "@/components/ProductReel";
import { getPayloadClient } from "@/get-payload";
import { defaultSort, sorting } from "@/lib/constants";
import { query } from "express";

export default async function SearchPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { sort, q: searchValue } = searchParams as { [key: string]: string };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  // const products = await getProducts({ sortKey, reverse, query: searchValue });

  const payload = await getPayloadClient();

  const { docs: products } = await payload.find({
    collection: "products",
    limit: 10,
    where: {
      name: {
        contains: searchValue,
      },
      approvedForSale: {
        equals: "approved",
      },
    },
  });

  const [product] = products;

  console.log("product:::", product);
  console.log("searchValue:::", searchValue);

  const resultsText = product ? "results" : "result";
// TODO finish style and logic and translate
  return (
    <>
      {product === undefined ? (
        <div className="bg-blue-100 flex items-center justify-center h-screen">
          <p>l&apos;objet ayant pour titre  &ldquo; {searchValue} &ldquo; n&apos;existe pas dans nos boutiques</p>
        </div>
      ) : (
        <div className="bg-blue-100 flex flex-col items-center justify-center">
          <h1 className="mt-8 pt-12">la recherche du terme: &ldquo; {searchValue} &ldquo; corespond à ces articles</h1>
          <ProductReel title={searchValue} query={product} />
        </div>
      )}
    </>
  );
}
