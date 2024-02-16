import { useEffect } from "react";
import { btns } from "../utils/local/orderStepsData";
import ChevronLeft from "../assets/ChevronLeft";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { previousStep, setActiveStep } from "../features/orderSteps";
import { closeMiniCartModal, closeMobileNav } from "../features/modal";

const OrderStep = () => {
  const { activeStep, completedStep } = useSelector(
    (store: storeType) => store.orderStep
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveStep(completedStep));
    dispatch(closeMobileNav());
    dispatch(closeMiniCartModal());
  }, []);

  return (
    <div className='step'>
      {btns.map((steps) => {
        const { id, value, displayText } = steps;
        let coordinate: string = "none";

        if (id === activeStep) {
          coordinate = "active";
        }
        if (id < completedStep) {
          coordinate = "completed";
        }
        if (id > activeStep && id <= completedStep) {
          coordinate = "currentStep";
        }
        if (id > activeStep && id >= completedStep) {
          coordinate = "uncompletedStep";
        }
        if (id > activeStep && id === completedStep) {
          coordinate = "mainStep";
        }
        if (id > activeStep && id < completedStep) {
          coordinate = "completed";
        }
        if (id === activeStep && id < completedStep) {
          coordinate = "prevStep";
        }
        if (id === 3 && completedStep === 1) {
          coordinate = "last";
        }
        if (id === 3 && activeStep === 1 && completedStep === 2) {
          coordinate = "finalStep";
        }

        return (
          <div
            key={id}
            className={`step__wrapper step__wrapper--${coordinate}`}
          >
            <header className='step__header'>
              {/* To display on small screen */}
              {id === activeStep && (
                <button
                  className='step__back'
                  onClick={() => dispatch(previousStep())}
                >
                  <ChevronLeft /> back
                </button>
              )}

              {/* To display on all screen sizes */}
              {id === activeStep && (
                <h2 className='step__tittle'>{displayText}</h2>
              )}
            </header>
            {/* STEP BUTTONS */}
            <div className={`step__btns step__btns--${coordinate}`}>
              <button
                disabled={id > completedStep}
                data-id={id}
                onClick={() => dispatch(setActiveStep(id))}
                className={`step__btn step__btn--${coordinate} `}
              >
                <span className={`step__number step__number--${coordinate} `}>
                  {id}
                </span>
                <span className={`step__btnText step__btnText--${coordinate} `}>
                  {value}
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrderStep;
