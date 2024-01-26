import { storeType } from "../store";
import { checkoutSteps } from "../utils/local/orderStepsData";
// redux
import { useSelector } from "react-redux";

const CheckoutSteps = () => {
  const { activeStep } = useSelector((store: storeType) => store.orderStep);

  return (
    <div className='checkoutStep'>
      {checkoutSteps.map((step) => {
        let coordinate: string = "none";
        if (step.id === activeStep) {
          coordinate = "active";
        }
        return (
          <div
            key={step.id}
            className={`checkoutStep__item checkoutStep__item--${coordinate}`}
          >
            {step.component}
          </div>
        );
      })}
    </div>
  );
};

export default CheckoutSteps;
