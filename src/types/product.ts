export type product = {
  id: number;
  name: string;
  description: string;
  price: number;
  offer: boolean;
  discountPrice: number;
  sizes: { id: number; size: string }[];
  colors: { id: number; name: string; hexColor: string }[];
  category: string;
  images: { id: number; img: string }[];
  reviews: number;
};
