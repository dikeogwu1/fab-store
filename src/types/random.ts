import React from "react";

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

// INSTAGRAM / PAYMENT CARDS
export type images = {
  id: number;
  img: string;
}[];

// CATEGORIES / COLLECTION / LATEST ARTICLES
export type namesAndImages = {
  id: number;
  name: string;
  img: string;
}[];

// PRODUCT REMARK
export type RemarkType = {
  id: number;
  name: string;
  component: React.ReactNode;
}[];
