import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
// import MobileNavbar from "../components/MobileNavbar";
import Carousel from "../components/Carousel";
import Featured from "../layouts/Featured";
import ShopCategories from "../layouts/ShopCategories";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      {/* <MobileNavbar /> */}
      <Carousel />
      <Featured />
      <ShopCategories />
    </>
  );
};

export default Home;
