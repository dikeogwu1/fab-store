import { useEffect } from "react";
import Navbar2 from "../components/Navbar2";
// redux
import { useDispatch } from "react-redux";
import { closeMiniCartModal } from "../features/modal";
import OrderStep from "../components/OrderStep";
import CheckoutSteps from "../layouts/CheckoutSteps";
import Footer from "../components/Footer";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(closeMiniCartModal());
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
