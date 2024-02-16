import ShoppingBag from "../assets/ShoppingBag";
// redux
import { useDispatch, useSelector } from "react-redux";
import { openMiniCartModal } from "../features/modal";
import { storeType } from "../store";

const CartItemsCounter = () => {
  const { cart } = useSelector((store: storeType) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className='itemsCounter'>
      <button
        className='itemsCounter__btn'
        onClick={() => dispatch(openMiniCartModal())}
      >
        <ShoppingBag />
      </button>
      <div className='itemsCounter__shoppingBagCount'>{cart.length}</div>
    </div>
  );
};

export default CartItemsCounter;
