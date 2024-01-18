import Close from "../assets/Close";
import Minus from "../assets/Minus";
import Pluse from "../assets/Pluse";
// utils
import { miniCartData } from "../utils/local/miniCartData";
import { truncateText } from "../utils/functions/truncate";
// redux
import { useDispatch } from "react-redux";
import { closeMiniCartModal } from "../features/modal";

const MiniCartItems = () => {
  const dispatch = useDispatch();

  return (
    <div className='mini'>
      <header className='mini__header'>
        <h2 className='mini__tittle'>Cart</h2>
        <button
          className='mini__close'
          onClick={() => dispatch(closeMiniCartModal())}
        >
          <Close />
        </button>
      </header>
      <div className='mini__itemBox'>
        {miniCartData.map((item) => {
          const { id, img, price, color, name } = item;
          return (
            <div className='mini__item' key={id}>
              <div className='mini__imgBox'>
                <img src={img} alt={name} />
              </div>
              <div className='mini__desc'>
                <h4 className='mini__name'>{truncateText(name, 11)}</h4>
                <p className='mini__color'>Color: {color}</p>
                <div className='mini__btnBox'>
                  <button className='mini__btn'>
                    <Pluse />
                  </button>
                  <strong className='mini__count'>2</strong>
                  <button className='mini__btn'>
                    <Minus />
                  </button>
                </div>
              </div>
              <div className='mini__sum'>
                <strong className='mini__price'>${price}</strong>
                <button className='mini__delete'>
                  <Close />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <footer className='mini__footer'>
        <div className='mini__item'>
          <h4 className='mini__subText'>Subtotal</h4>
          <strong className='mini__subAmount'>$99.00</strong>
        </div>
        <div className='mini__cartTotal'>
          <h4 className='mini__totalText'>Total</h4>
          <strong className='mini__totalAmount'>$234.00</strong>
        </div>
        <div className='mini__action'>
          <button className='mini__viewCart'>View Cart</button>
          <button className='mini__checkout'>Checkout</button>
        </div>
      </footer>
    </div>
  );
};

export default MiniCartItems;
