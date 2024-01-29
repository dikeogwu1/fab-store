import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import Hero from "../layouts/Hero";
import BlogLayout from "../layouts/BlogLayout";

const Blog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Navbar2 />
      <Hero
        link='blog'
        name='Blog'
        page='Our Blog'
        desc='Fashion ideas and design inspiration'
        bgImage='https://res.cloudinary.com/dikeogwu1/image/upload/v1706528586/Fabstore%20e-commerce/Poster_blog_jvkiio.png'
      />
      <BlogLayout />
      <Footer />
    </>
  );
};

export default Blog;
