import { product } from "../../types/product";

export const productData: product = {
  id: 1,
  name: "Men's short",
  description:
    "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
  price: 199.55,
  offer: true,
  discountPrice: 199.09,
  amount: 0,
  sizes: [
    { id: 1, size: "M" },
    { id: 2, size: "XL" },
    { id: 3, size: "XXL" },
  ],
  colors: [
    { id: 1, name: "Red", hexColor: "#a61f07" },
    { id: 2, name: "Green", hexColor: "#082" },
    { id: 3, name: "Black", hexColor: "#000" },
  ],
  category: "Men's swiming short",
  images: [
    {
      id: 1,
      img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
    },
  ],
  reviews: 11,
};
