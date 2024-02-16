import { useEffect, useState } from "react";
import { cartSummaryData } from "../utils/local/cartSummaryData";
import CheckoutTotal from "./CheckoutTotal";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { changeTotal, setShippingFee } from "../features/cart";

const CartSummary = () => {
  const [isChecked, setIsChecked] = useState<number>(1);
  const { activeStep } = useSelector((store: storeType) => store.orderStep);
  const { total, subTotal } = useSelector((store: storeType) => store.cart);
  const distpatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [activeStep]);

  return (
    <div className='cartSummary'>
      <div className='cartSummary__container'>
        <h4 className='cartSummary__tittle'>Cart summary</h4>
        {/* checkboxies */}
        {cartSummaryData.map((summary) => {
          const { id, text, amount, symbol } = summary;
          const percentage = (amount / 100) * total;
          let coordinate: string = "none";
          if (id === isChecked) {
            coordinate = "active";
          }

          return (
            <div key={id} className='cartSummary__item'>
              <button
                className={`cartSummary__checker cartSummary__checker--${coordinate}`}
                onClick={() => {
                  setIsChecked(id);
                  if (id === 1 && total === subTotal) {
                    distpatch(changeTotal(total + amount));
                    distpatch(setShippingFee({ fee: amount }));
                    return;
                  }
                  if (id === 1 && total !== subTotal) {
                    distpatch(changeTotal(subTotal + amount));
                    return;
                  }
                  if (id === 2 && total === subTotal) {
                    distpatch(changeTotal(total + amount));
                    distpatch(setShippingFee({ fee: amount }));
                    return;
                  }
                  if (id === 2 && total !== subTotal) {
                    distpatch(changeTotal(subTotal + amount));
                    return;
                  }
                  if (id === 3 && total === subTotal) {
                    distpatch(changeTotal(total + percentage));
                    distpatch(setShippingFee({ fee: percentage }));
                    return;
                  }
                  if (id === 3 && total !== subTotal) {
                    distpatch(changeTotal(subTotal + percentage));
                    return;
                  }
                }}
              >
                <div className='cartSummary__check'>
                  <div className='cartSummary__textBox'>
                    <div
                      className={`cartSummary__circle cartSummary__circle--${coordinate}`}
                    ></div>
                    <strong className='cartSummary__text'>{text}</strong>
                  </div>
                  <strong className='cartSummary__amount'>
                    {symbol}
                    {amount.toFixed(2)}
                  </strong>
                </div>
              </button>
            </div>
          );
        })}
        {/* total box */}
        <CheckoutTotal />
      </div>
    </div>
  );
};

export default CartSummary;
