import { RemarkType } from "../../types/random";
import AdditionalInfo from "../../components/AdditionInfo";
import QuestionOnProduct from "../../components/QuestionOnProduct";
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
    component: <QuestionOnProduct />,
  },
  {
    id: 3,
    name: "Reviews",
    component: <Reviews />,
  },
];
