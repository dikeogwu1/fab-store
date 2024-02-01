import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import AllProducts from "../layouts/AllProducts";
import Hero from "../layouts/Hero";
import Services from "../layouts/Services";
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { closeProductDropDown, closeShopDropDown } from "../features/modal";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
  }, []);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <Hero
        link='shop'
        name='Shop'
        page='Shop Page'
        desc='More than just fashion. It’s a lifestyle.'
        bgImage='https://res.cloudinary.com/dikeogwu1/image/upload/v1705941581/Fabstore%20e-commerce/Shop_page_poster_qtnuf2.png'
      />
      <AllProducts />
      <Services />
      <Footer />
    </>
  );
};

export default Shop;
