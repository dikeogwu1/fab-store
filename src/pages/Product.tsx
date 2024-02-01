import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import ProductLayout from "../layouts/ProductLayout";
import Footer from "../components/Footer";
// redux
import { useDispatch } from "react-redux";
import { closeProductDropDown, closeShopDropDown } from "../features/modal";

const Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
  }, []);

  return (
    <>
      <Navbar2 />
      <ProductLayout />
      <Footer />
    </>
  );
};

export default Product;
