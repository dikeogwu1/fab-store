import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import ProductLayout from "../layouts/ProductLayout";
import Footer from "../components/Footer";

const Product = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
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
