import { useEffect, useState } from "react";
import { cartSummaryData } from "../utils/local/cartSummaryData";
import CheckoutTotal from "./CheckoutTotal";
// redux
import { useDispatch } from "react-redux";
import { chooseShipping } from "../features/shippingMeans";

const CartSummary = () => {
  const [isChecked, setIsChecked] = useState<number>(1);
  const distpatch = useDispatch();

  useEffect(() => {
    distpatch(chooseShipping("freeShipping"));
  }, []);

  return (
    <div className='cartSummary'>
      <div className='cartSummary__container'>
        <h4 className='cartSummary__tittle'>Cart summary</h4>
        {/* checkbox */}
        {cartSummaryData.map((summary) => {
          const { id, text, amount, value } = summary;
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
                  distpatch(chooseShipping(value));
                }}
              >
                <div className='cartSummary__check'>
                  <div className='cartSummary__textBox'>
                    <div
                      className={`cartSummary__circle cartSummary__circle--${coordinate}`}
                    ></div>
                    <strong className='cartSummary__text'>{text}</strong>
                  </div>
                  <strong className='cartSummary__amount'>{amount}</strong>
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
