import { product } from "../../types/product";

export const miniCartData: product[] = [
  {
    id: 1,
    name: "Men's short",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 25.5,
    offer: false,
    discountPrice: 0,
    amount: 0,
    sizes: [
      { id: 1, size: "M" },
      { id: 2, size: "XL" },
      { id: 3, size: "XXL" },
    ],
    colors: [
      { id: 1, name: "Black", hexColor: "#000" },
      { id: 2, name: "Red", hexColor: "#a61f07" },
      { id: 3, name: "Green", hexColor: "#082" },
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
  },

  {
    id: 2,
    name: "Golf bag",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 87.25,
    offer: false,
    discountPrice: 0,
    amount: 0,
    sizes: [
      { id: 1, size: "M" },
      { id: 2, size: "XL" },
      { id: 3, size: "XXL" },
    ],
    colors: [
      { id: 1, name: "Red", hexColor: "#a61f07" },
      { id: 2, name: "Black", hexColor: "#000" },
      { id: 3, name: "Green", hexColor: "#082" },
    ],
    category: "Men's swiming short",
    images: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082870/Fabstore%20e-commerce/img_1_u5mtmk.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
      },
    ],
    reviews: 11,
  },

  {
    id: 3,
    name: "Noise Canceling",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    price: 149.99,
    offer: false,
    discountPrice: 0,
    amount: 0,
    sizes: [
      { id: 1, size: "M" },
      { id: 2, size: "XL" },
      { id: 3, size: "XXL" },
    ],
    colors: [
      { id: 1, name: "White", hexColor: "#fff" },
      { id: 2, name: "Red", hexColor: "#a61f07" },
      { id: 3, name: "Green", hexColor: "#082" },
    ],
    category: "Men's swiming short",
    images: [
      {
        id: 1,
        img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082870/Fabstore%20e-commerce/img_1_u5mtmk.png",
      },
      {
        id: 2,
        img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
      },
    ],
    reviews: 11,
  },
];
