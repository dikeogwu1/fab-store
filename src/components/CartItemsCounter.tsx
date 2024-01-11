import ShoppingBag from "../assets/ShoppingBag";

const CartItemsCounter = () => {
  return (
    <div className='itemsCounter'>
      <button className='itemsCounter__btn'>
        <ShoppingBag />
      </button>
      <div className='itemsCounter__shoppingBagCount'>2</div>
    </div>
  );
};

export default CartItemsCounter;
