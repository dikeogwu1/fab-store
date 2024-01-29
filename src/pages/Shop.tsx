import Footer from "../components/Footer";
import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import AllProducts from "../layouts/AllProducts";
import InstagramImg from "../layouts/InstagramImg";
import Hero from "../layouts/Hero";

const Shop = () => {
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
      <InstagramImg />
      <Footer />
    </>
  );
};

export default Shop;
