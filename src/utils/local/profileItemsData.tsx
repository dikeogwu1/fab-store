import Account from "../../components/Account";
import Address from "../../components/Address";
import Orders from "../../components/Orders";
import Wishlist from "../../components/Wishlist";
import { stepsType } from "../../types/orderStep";
import { categoriesBtn } from "../../types/random";

export const profileListData: stepsType = [
  {
    id: 1,
    component: <Account />,
  },
  {
    id: 2,
    component: <Address />,
  },
  {
    id: 3,
    component: <Orders />,
  },
  {
    id: 4,
    component: <Wishlist />,
  },
];

export const profileItemData: categoriesBtn = [
  {
    id: 1,
    name: "Account",
  },
  {
    id: 2,
    name: "Address",
  },
  {
    id: 3,
    name: "Orders",
  },
  {
    id: 4,
    name: "Wishlist",
  },
  {
    id: 5,
    name: "Log Out",
  },
];
