import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import InstagramImg from "../layouts/InstagramImg";
import SingleBlogLayout from "../layouts/SingleBlogLayout";

const SingleBlog = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar2 />
      <SingleBlogLayout />
      <InstagramImg />
      <Footer />
    </>
  );
};

export default SingleBlog;
