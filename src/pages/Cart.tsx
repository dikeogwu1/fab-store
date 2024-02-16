import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
import Footer from "../components/Footer";
import CheckoutSteps from "../layouts/CheckoutSteps";
import OrderStep from "../components/OrderStep";
// redux
import { useDispatch } from "react-redux";
import {
  closeMiniCartModal,
  closeMobileNav,
  closeProductDropDown,
  closeShopDropDown,
} from "../features/modal";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeMiniCartModal());
    dispatch(closeShopDropDown());
    dispatch(closeProductDropDown());
  }, []);

  return (
    <div>
      <Navbar2 />
      <OrderStep />
      <CheckoutSteps />
      <Footer />
    </div>
  );
};

export default Cart;
