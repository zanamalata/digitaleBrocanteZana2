export interface SortFilterItem {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Pertinence',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Tendance', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Derniers arrivages', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Prix croissant', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Prix décroissant', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];
