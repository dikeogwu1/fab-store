import React, { useEffect, useState } from "react";
import Close from "../assets/Close";
import Minus from "../assets/Minus";
import Pluse from "../assets/Pluse";
import TicketPercent from "../assets/TicketPercent";
import { Link, useNavigate } from "react-router-dom";
// utils
import { truncateText } from "../utils/functions/truncate";
import { addCommas } from "../utils/functions/addCommas";
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import { closeMiniCartModal } from "../features/modal";
import { storeType } from "../store";
import {
  calculateTotal,
  changeTotal,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
  useCoupon,
} from "../features/cart";
import { setActiveStep, setCompletedStep } from "../features/orderSteps";

const MiniCartItems = ({ mini }: { mini: boolean }) => {
  const [value, setValue] = useState<string>("");
  const { freeShipping, expressShipping, pickUp } = useSelector(
    (store: storeType) => store.shipping
  );
  const { cart, subTotal, total, isCoupon } = useSelector(
    (store: storeType) => store.cart
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(calculateTotal());
    return () => {
      if (cart.length < 1) {
        dispatch(setActiveStep(1));
        dispatch(setCompletedStep(1));
      }
    };
  }, [cart]);

  const handleCouponCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value) {
      toast.error("Provide coupon code");
      return;
    }
    if (value && value !== "JenkateMW") {
      toast.error("Invalid coupon code");
      return;
    }
    if (value === "JenkateMW" && !isCoupon) {
      dispatch(changeTotal(total - 25));
      dispatch(useCoupon());
      toast.success("$25.00 has been removed");
      return;
    }
    if (isCoupon) {
      toast.error("This coupon code has been used");
    }
  };

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
        {cart.length < 1 ? (
          <h2 className='mini__empty'>Your bag is empty</h2>
        ) : (
          <>
            {cart.map((item: any) => {
              const { _id, img, price, color, name, quantity } = item;
              return (
                <div className='mini__item' key={_id + color}>
                  <div className='mini__imgBox'>
                    <img src={img} alt={name} />
                  </div>
                  <div className='mini__desc'>
                    <h4 className='mini__name'>{truncateText(name, 11)}</h4>
                    <p className='mini__color'>Color: {color}</p>
                    <div className='mini__btnBox'>
                      <button
                        className='mini__btn'
                        onClick={() => {
                          dispatch(increaseQuantity({ id: _id, color: color }));
                        }}
                      >
                        <Pluse />
                      </button>
                      <strong className='mini__count'>{quantity}</strong>
                      <button
                        className='mini__btn'
                        onClick={() => {
                          if (quantity === 1) {
                            dispatch(deleteItem({ id: _id, color: color }));
                          } else {
                            dispatch(
                              decreaseQuantity({ id: _id, color: color })
                            );
                          }
                        }}
                      >
                        <Minus />
                      </button>
                    </div>
                  </div>
                  <div className='mini__sum'>
                    <strong className='mini__price'>
                      ${addCommas(price.toFixed(2).toString())}
                    </strong>
                    {mini && (
                      <button
                        className='mini__delete'
                        onClick={() =>
                          dispatch(deleteItem({ id: _id, color: color }))
                        }
                      >
                        <Close />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>

      {cart.length > 0 && (
        <footer className='mini__footer'>
          {/* To display on checkout */}
          {!mini && (
            <div className='mini__external'>
              <form className='mini__coupon'>
                <input
                  type='text'
                  placeholder='Coupon code'
                  autoComplete='off'
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e.target.value)
                  }
                  className='mini__input'
                />
                <button className='mini__apply' onClick={handleCouponCode}>
                  Apply
                </button>
              </form>
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
            <strong className='mini__subAmount'>
              ${addCommas(subTotal.toFixed(2).toString())}
            </strong>
          </div>
          <div className='mini__cartTotal'>
            <h4 className='mini__totalText'>Total</h4>
            <strong className='mini__totalAmount'>
              ${addCommas(total.toFixed(2).toString())}
            </strong>
          </div>
          {mini && (
            <div className='mini__action'>
              <Link to='/cart' className='mini__viewCart'>
                View Cart
              </Link>
              <button
                className='mini__checkout'
                onClick={() => {
                  dispatch(setActiveStep(2));
                  dispatch(setCompletedStep(2));
                  navigate("/cart");
                }}
              >
                Checkout
              </button>
            </div>
          )}
        </footer>
      )}
    </div>
  );
};

export default MiniCartItems;
