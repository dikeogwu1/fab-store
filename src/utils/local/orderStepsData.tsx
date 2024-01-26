import { stepsBtn, stepsType } from "../../types/orderStep";
import CheckoutDetails from "../../components/CheckoutDetails";
import OrderComplete from "../../components/OrderComplete";
import ShoppingCart from "../../components/ShoppingCart";

export const checkoutSteps: stepsType = [
  {
    id: 1,
    component: <ShoppingCart />,
  },
  {
    id: 2,
    component: <CheckoutDetails />,
  },
  {
    id: 3,
    component: <OrderComplete />,
  },
];

export const btns: stepsBtn = [
  {
    id: 1,
    displayText: "Cart",
    value: "Shopping cart",
  },
  {
    id: 2,
    displayText: "Check out",
    value: "Checkout details",
  },
  {
    id: 3,
    displayText: "Complete!",
    value: "Order complete",
  },
];
