import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import InstagramImg from "../layouts/InstagramImg";
import SingleBlogLayout from "../layouts/SingleBlogLayout";
// redux
import { useDispatch } from "react-redux";
import { closeProductDropDown, closeShopDropDown } from "../features/modal";

const SingleBlog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
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
