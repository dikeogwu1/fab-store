// utils
import { addCommas } from "../utils/functions/addCommas";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { setActiveStep, setCompletedStep } from "../features/orderSteps";

const CheckoutTotal = () => {
  const { subTotal, total } = useSelector((store: storeType) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className='totalBox'>
      <div className='totalBox__subtotal'>
        <strong className='totalBox__subText'>Subtotal</strong>
        <strong className='totalBox__subAmount'>
          ${addCommas(subTotal.toFixed(2).toString())}
        </strong>
      </div>
      <div className='totalBox__total'>
        <strong className='totalBox__totalText'>Total</strong>
        <strong className='totalBox__totalText'>
          ${addCommas(total.toFixed(2).toString())}
        </strong>
      </div>
      <button
        className='totalBox__checkout'
        onClick={() => {
          dispatch(setActiveStep(2));
          dispatch(setCompletedStep(2));
        }}
      >
        Checkout
      </button>
    </div>
  );
};

export default CheckoutTotal;
