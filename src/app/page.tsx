import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Share2, Leaf, Store, SearchCheck } from "lucide-react";
import ProductReel from "@/components/ProductReel";
import SearchBar from "@/components/SearchBar";
import { PRODUCT_CATEGORIES } from "@/config";

const perks = [
  {
    name: "Créer votre boutique",
    Icon: Store,
    description:
      "Créer votre boutique en ligne et vendez vos produits en quelques clics",
  },
  {
    name: "Collections organisées",
    Icon: Share2,
    description:
      "Des collections organisées en sous collections pour vous aider à trouver le produit que vous cherchez",
  },
  {
    name: "Trouver la perle rare",
    Icon: SearchCheck,
    description:
      "Trouver la perle rare parmi des milliers de produits de qualité",
  },
];

const featuredNamesByCategory = PRODUCT_CATEGORIES.map(category => {
  return {
    label: category.label,
    featuredNames: category.featured.map(featuredItem => featuredItem.name)
  };
 });
 
export default function Home() {



  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Votre brocante <br />
            <span className="text-blue-600">en ligne</span>
          </h1>
          <p className="mt-6 text-xl font-semibold max-w-prose text-muted-foreground">
            <span className="whitespace-nowrap">
              Bienvenue sur Digital Brocante! 😍
            </span>
            <br />
            Tous les produits sur cette plateforme sont vérifiés par nos equipes
            pour vous assurer la meilleure qualité possible
          </p>
          <SearchBar />
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href={"/products"} className={buttonVariants()}>
              Parcourir les tendances
            </Link>
            <Button variant="ghost">Notre promesse de qualité &rarr;</Button>
          </div>
        </div>
        {/* TODO: list products */}

        <ProductReel
          href="/products?sort=recent"
          title="Nouveauté"
          query={{ sort: "desc", limit: 4 }}
        />
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-forground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
