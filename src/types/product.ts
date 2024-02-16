export type product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  offer: boolean;
  discountPrice: number;
  sizes: { id: number; size: string }[];
  colors: { id: number; name: string; hexColor: string }[];
  categories: string;
  collections: string;
  numOfReviews: number;
  images: { id: number; img: string }[];
  amount: number;
};
