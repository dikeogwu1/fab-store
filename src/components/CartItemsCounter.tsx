import ShoppingBag from "../assets/ShoppingBag";
// redux
import { useDispatch } from "react-redux";
import { openMiniCartModal } from "../features/modal";

const CartItemsCounter = () => {
  const dispatch = useDispatch();

  return (
    <div className='itemsCounter'>
      <button
        className='itemsCounter__btn'
        onClick={() => dispatch(openMiniCartModal())}
      >
        <ShoppingBag />
      </button>
      <div className='itemsCounter__shoppingBagCount'>2</div>
    </div>
  );
};

export default CartItemsCounter;
