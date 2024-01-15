import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
// import MobileNavbar from "../components/MobileNavbar";
import Carousel from "../components/Carousel";
import Featured from "../layouts/Featured";
import ShopCategories from "../layouts/ShopCategories";
import LimitedEdition from "../layouts/LimitedEdition";
import ShopCollections from "../layouts/ShopCollections";
import LatestArticles from "../layouts/LatestArticles";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      {/* <MobileNavbar /> */}
      <Carousel />
      <Featured />
      <ShopCategories />
      <LimitedEdition />
      <ShopCollections />
      <LatestArticles />
    </>
  );
};

export default Home;
