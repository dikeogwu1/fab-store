import { RemarkType } from "../../types/remarks";
import AdditionalInfo from "../../components/AdditionInfo";
import QuestionProduct from "../../components/QuestionProduct";
import Reviews from "../../components/Reviews";

export const userRemark: RemarkType = [
  {
    id: 1,
    name: "Additional Info",
    component: <AdditionalInfo />,
  },
  {
    id: 2,
    name: "Questions",
    component: <QuestionProduct />,
  },
  {
    id: 3,
    name: "Reviews",
    component: <Reviews />,
  },
];

export const btns = [
  {
    id: 1,
    value: "Additional Info",
  },
  {
    id: 2,
    value: "Questions",
  },
  {
    id: 3,
    value: "Reviews",
  },
];
