import { cartSummaryData } from "../utils/local/cartSummaryData";
import Checker from "./Checker";
import CheckoutTotal from "./CheckoutTotal";

const CartSummary = () => {
  return (
    <div className='cartSummary'>
      <div className='cartSummary__container'>
        <h4 className='cartSummary__tittle'>Cart summary</h4>
        {/* checkbox */}
        {cartSummaryData.map((summary) => {
          return (
            <div key={summary.id} className='cartSummary__item'>
              <Checker summary={summary} />
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
