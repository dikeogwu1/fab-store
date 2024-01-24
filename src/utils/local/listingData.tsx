import { RemarkType } from "../../types/remarks";
import Categories from "../../components/Categories";
import Prices from "../../components/Prices";

export const filters: RemarkType = [
  {
    id: 1,
    name: "Categories",
    component: <Categories />,
  },
  {
    id: 2,
    name: "Prices",
    component: <Prices />,
  },
];

// export const btns = [
//   {
//     id: 1,
//     value: "Additional Info",
//   },
//   {
//     id: 2,
//     value: "Questions",
//   },
//   {
//     id: 3,
//     value: "Reviews",
//   },
// ];
