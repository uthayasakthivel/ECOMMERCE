type products = {
  _id: string;
  productName: string;
  productPrice: number;
  productOfferPrice: number;
  productImage: string;
};

type CategoryType = {
  creationAt: string;
  id: number;
  image: string;
  name: string;
  updatedAt: string;
};

type filterByCategoryType = {
  id: number;
  creationAt: string;
  updatedAt: string;
  // image: string[];
  image: string;
  description: string;
  price: number;
  title: string;
  category: CategoryType;
};

export type { filterByCategoryType, products };
