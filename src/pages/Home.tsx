import Navbar1 from "../components/Navbar1";
import Navbar2 from "../components/Navbar2";
import MobileNavbar from "../components/MobileNavbar";
import Carousel from "../components/Carousel";
import Featured from "../layouts/Featured";
import ShopCategories from "../layouts/ShopCategories";
import LimitedEdition from "../layouts/LimitedEdition";
import ShopCollections from "../layouts/ShopCollections";
import LatestArticles from "../layouts/LatestArticles";
import NewsLetter from "../layouts/NewsLetter";
import NewsFeed from "../layouts/NewsFeed";
import InstagramImg from "../layouts/InstagramImg";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <MobileNavbar />
      <Carousel />
      <Featured />
      <ShopCategories />
      <LimitedEdition />
      <ShopCollections />
      <LatestArticles />
      <NewsLetter />
      <NewsFeed />
      <InstagramImg />
      <Footer />
    </>
  );
};

export default Home;
