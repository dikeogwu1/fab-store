import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Services from "../layouts/Services";
import Footer from "../components/Footer";
import ContactLayout from "../layouts/ContactLayout";
// redux
import { useDispatch } from "react-redux";
import {
  closeMobileNav,
  closeProductDropDown,
  closeShopDropDown,
} from "../features/modal";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeMobileNav());
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
  }, []);

  return (
    <>
      <Navbar2 />
      <ContactLayout />
      <Services />
      <Footer />
    </>
  );
};

export default Contact;
