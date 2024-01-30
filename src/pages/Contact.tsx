import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
// redux
import { useDispatch } from "react-redux";
import { closeMobileNav } from "../features/modal";
import ContactLayout from "../layouts/ContactLayout";
import Footer from "../components/Footer";
import Services from "../layouts/Services";

const Contact = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeMobileNav());
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
