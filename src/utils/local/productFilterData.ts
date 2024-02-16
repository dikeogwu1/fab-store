import { categoriesBtn, pricesBtns } from "../../types/random";

export const categoriesFilterBtn: categoriesBtn = [
  {
    id: 1,
    name: "Back Pack",
  },
  {
    id: 2,
    name: "Hoodie",
  },
  {
    id: 3,
    name: "Jacket",
  },
  {
    id: 4,
    name: "Blazer",
  },
  {
    id: 5,
    name: "T-Shirt",
  },
  {
    id: 6,
    name: "Shoe",
  },
  {
    id: 7,
    name: "Trouser",
  },
  {
    id: 8,
    name: "Cardigan",
  },
  {
    id: 9,
    name: "Jean",
  },
  {
    id: 10,
    name: "Accessorie",
  },
  {
    id: 11,
    name: "Short",
  },
  {
    id: 12,
    name: "Shirt",
  },
];

export const collectionFilterBtn: categoriesBtn = [
  {
    id: 1,
    name: "Men’s Set",
  },
  {
    id: 2,
    name: "Music Set",
  },
  {
    id: 3,
    name: "Lady’s Set",
  },
  {
    id: 4,
    name: "Head Set",
  },
  {
    id: 5,
    name: "Sports Set",
  },
  {
    id: 6,
    name: "Swimming Set",
  },
  {
    id: 7,
    name: "Winter Set",
  },
  {
    id: 8,
    name: "Corporate Set",
  },
  {
    id: 9,
    name: "Gulf Set",
  },
  {
    id: 10,
    name: "Makeup Set",
  },
  {
    id: 11,
    name: "Classic Set",
  },
];

export const pricesButtons: pricesBtns = [
  {
    id: 1,
    text: "All Prices",
    pricesGreaterThan: 0,
    pricesLessThan: "<100000",
  },
  {
    id: 2,
    text: "$0.00 - $99.99",
    pricesGreaterThan: 0,
    pricesLessThan: "<100",
  },
  {
    id: 3,
    text: "$100.00 - $199.99",
    pricesGreaterThan: 100,
    pricesLessThan: "<200",
  },
  {
    id: 4,
    text: "$200.00 - $299.99",
    pricesGreaterThan: 200,
    pricesLessThan: "<300",
  },
  {
    id: 5,
    text: "$300.00 - $399.99",
    pricesGreaterThan: 300,
    pricesLessThan: "<400",
  },
  {
    id: 6,
    text: "$400.00+",
    pricesGreaterThan: 399.99,
    pricesLessThan: "<200000",
  },
];
