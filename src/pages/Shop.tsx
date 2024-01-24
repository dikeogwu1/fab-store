import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import AllProducts from "../layouts/AllProducts";
import InstagramImg from "../layouts/InstagramImg";
import ShopLayout from "../layouts/ShopLayout";

const Shop = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <ShopLayout />
      <AllProducts />
      <InstagramImg />
      <Footer />
    </>
  );
};

export default Shop;
