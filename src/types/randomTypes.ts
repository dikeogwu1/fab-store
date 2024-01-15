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
  id: number;
  name: string;
  price: string;
  discount?: string;
  img: string;
}[];

// CATEGORIES
export type categories = {
  id: number;
  name: string;
  img: string;
}[];

// COLLECTION
export type collection = {
  id: number;
  name: string;
  img: string;
}[];

// LATEST ARTICLES
export type articles = {
  id: number;
  img: string;
  name: string;
}[];
