import Close from "../assets/Close";
import Minus from "../assets/Minus";
import Pluse from "../assets/Pluse";
import { Link } from "react-router-dom";
// utils
import { miniCartData } from "../utils/local/miniCartData";
import { truncateText } from "../utils/functions/truncate";
// redux
import { useDispatch, useSelector } from "react-redux";
import { closeMiniCartModal } from "../features/modal";
import TicketPercent from "../assets/TicketPercent";
import { storeType } from "../store";

const MiniCartItems = ({ mini }: { mini: boolean }) => {
  const { freeShipping, expressShipping, pickUp } = useSelector(
    (store: storeType) => store.shipping
  );
  const dispatch = useDispatch();

  return (
    <div className='mini'>
      <header className='mini__header'>
        <h2 className='mini__tittle'>{mini ? "Cart" : "Order summary"}</h2>
        {mini && (
          <button
            className='mini__close'
            onClick={() => dispatch(closeMiniCartModal())}
          >
            <Close />
          </button>
        )}
      </header>
      <div className='mini__itemBox'>
        {miniCartData.map((item) => {
          const { id, images, price, colors, name } = item;
          return (
            <div className='mini__item' key={id}>
              <div className='mini__imgBox'>
                <img src={images[0].img} alt={name} />
              </div>
              <div className='mini__desc'>
                <h4 className='mini__name'>{truncateText(name, 11)}</h4>
                <p className='mini__color'>Color: {colors[0].name}</p>
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
                {mini && (
                  <button className='mini__delete'>
                    <Close />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <footer className='mini__footer'>
        {/* To display on checkout */}
        {!mini && (
          <div className='mini__external'>
            <div className='mini__coupon'>
              <input
                type='text'
                placeholder='Coupon code'
                className='mini__input'
              />
              <button className='mini__apply'>Apply</button>
            </div>
            <div className='mini__item'>
              <strong className='mini__subText mini__subText--external'>
                <TicketPercent /> JenkateMW
              </strong>
              <strong className='mini__subAmount mini__subAmount--external'>
                -$25.00 [Remove]
              </strong>
            </div>
            {/* selected transportation means */}
            <div className='mini__transport'>
              {/* free shipping */}
              {freeShipping && (
                <div className='mini__item'>
                  <strong className='mini__subText'>Shipping</strong>
                  <strong className='mini__subAmount'>Free</strong>
                </div>
              )}
              {/* express shipping */}
              {expressShipping && (
                <div className='mini__item'>
                  <strong className='mini__subText'>Shipping</strong>
                  <strong className='mini__subAmount'>Express</strong>
                </div>
              )}
              {/* pick up */}
              {pickUp && (
                <div className='mini__item'>
                  <strong className='mini__subText'>Shipping</strong>
                  <strong className='mini__subAmount'>Pick Up</strong>
                </div>
              )}
            </div>
          </div>
        )}

        <div className='mini__item'>
          <h4 className='mini__subText'>Subtotal</h4>
          <strong className='mini__subAmount'>$99.00</strong>
        </div>
        <div className='mini__cartTotal'>
          <h4 className='mini__totalText'>Total</h4>
          <strong className='mini__totalAmount'>$234.00</strong>
        </div>
        {mini && (
          <div className='mini__action'>
            <Link to='/cart' className='mini__viewCart'>
              View Cart
            </Link>
            <button className='mini__checkout'>Checkout</button>
          </div>
        )}
      </footer>
    </div>
  );
};

export default MiniCartItems;
