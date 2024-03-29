// UNION
export type union = string | number;

// TIMER
export type timer = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

// CAROUSEL
export type carousel = {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
  btn: string;
}[];

// FEATURED ITEMS
export type featured = {
  _id: string;
  name: string;
  price: string;
  discount?: string;
  images: { id: number; img: string }[];
  desc?: string;
}[];

// INSTAGRAM / PAYMENT CARDS
export type images = {
  id: number;
  img: string;
}[];

// CATEGORIES / COLLECTIONS BUTTONS
export type categoriesBtn = {
  id: number;
  name: string;
}[];

// PRICE RANGE BUTTONS
export type pricesBtns = {
  id: number;
  text: string;
  pricesGreaterThan: number;
  pricesLessThan: string;
}[];

// HOME PAGE CATEGORIES / HOME PAGE COLLECTION / LATEST ARTICLES
export type namesAndImages = {
  id: number;
  name: string;
  img: string;
  link?: string;
}[];

// REVIEWS
export type review = {
  id: number;
  img: string;
  name: string;
  rating: number;
  desc: string;
}[];

export type singleReview = {
  review: {
    id: number;
    img: string;
    name: string;
    rating: number;
    desc: string;
  };
};

// CART SUMMARY
export type cartSummary = {
  id: number;
  text: string;
  amount: number;
  value: string;
  symbol: string;
}[];

// HERO
export type heroType = {
  link: string;
  page: string;
  desc: string;
  name: string;
  bgImage: string;
};

// BLOG
export type blogType = {
  id: number;
  img: string;
  exerpt: string;
  featured: boolean;
  date: Date;
}[];

// CONTACT INFORMATION
export type contactInformation = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  streetAddress: string;
  city: string;
  state: string;
};
