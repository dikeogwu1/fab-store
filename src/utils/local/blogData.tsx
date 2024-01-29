import AllBlog from "../../components/AllBlog";
import { stepsType } from "../../types/orderStep";
import { blogType, categoriesBtn } from "../../types/random";

export const blogBtn: categoriesBtn = [
  {
    id: 1,
    name: "All Blog",
  },
  {
    id: 2,
    name: "Featured",
  },
];

export const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "Octomber",
  "November",
  "December",
];

// get dates
const currentDate = new Date();
const month = currentDate.getMonth();
const date = currentDate.getDate();
const year = currentDate.getFullYear();

// // future dates
// const upFront = new Date(year, month, date + 3, 23, 30, 0);

export const blogData: blogType = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082868/Fabstore%20e-commerce/img_3_hubitt.png",
    exerpt: "Air Jordan x Travis Scott Event",
    featured: false,
    date: new Date(year, month, date - 13, 23, 30, 0),
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082869/Fabstore%20e-commerce/img_4_styiuf.png",
    exerpt: "The timeless classics on the green",
    featured: true,
    date: new Date(year, month, date - 17, 8, 30, 0),
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705351989/Fabstore%20e-commerce/holiday_gift1_1_g3nehg.png",
    exerpt: "2023 Holiday Gift Guide",
    featured: true,
    date: new Date(year, month, date - 2, 23, 30, 0),
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1706547894/Fabstore%20e-commerce/blog_img2_lgrczy.png",
    exerpt: "Trend Alert: Must-Have Fashion Staples for Every Wardrobe",
    featured: true,
    date: new Date(year, month, date, 2, 30, 0),
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1706545957/Fabstore%20e-commerce/blog_img_yezwxb.png",
    exerpt: "Style Spotlight: The Rise of Sustainable Fashion",
    featured: true,
    date: new Date(year, month, date - 59, 13, 30, 0),
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1706547932/Fabstore%20e-commerce/Tshirt2_x8plko.jpg",
    exerpt: "Fashion Forward: Top Runway Trends of the Season",
    featured: false,
    date: new Date(year, month - 1, date, 23, 30, 0),
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082759/Fabstore%20e-commerce/Paste_image20_kwqd2n.png",
    exerpt: "Closet Essentials: Building a Versatile Capsule Wardrobe",
    featured: false,
    date: new Date(year, month - 2, date + -2, 23, 30, 0),
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082613/Fabstore%20e-commerce/Paste_image1_kbdvu6.png",
    exerpt: "Celebrity Style Inspo: Recreate Iconic Red Carpet Looks",
    featured: true,
    date: new Date(year, month - 3, date - 11, 23, 30, 0),
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705082613/Fabstore%20e-commerce/Paste_image2_mrmij6.png",
    exerpt: "DIY Fashion: Upcycling Tips to Refresh Your Closet",
    featured: false,
    date: new Date(year, month - 4, date - 13, 23, 30, 0),
  },
];

const featured = blogData.filter((blog) => blog.featured === true);

export const blogItem: stepsType = [
  {
    id: 1,
    component: <AllBlog items={blogData} more={true} />,
  },
  {
    id: 2,
    component: <AllBlog items={featured} more={false} />,
  },
];
