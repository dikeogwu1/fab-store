import Close from "../assets/Close";
import Minus from "../assets/Minus";
import Pluse from "../assets/Pluse";
import CartSummary from "./CartSummary";
import Coupon from "./Coupon";
// utils
import { addCommas } from "../utils/functions/addCommas";
// redux
import { storeType } from "../store";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../features/cart";

const ShoppingCart = () => {
  const { cart } = useSelector((store: storeType) => store.cart);
  const dispatch = useDispatch();

  return (
    <div className='cart'>
      <div className='cart__container'>
        <div className='cart__box'>
          <div className='cart__header'>
            <h4 className='cart__tittle cart__tittle--first'>Product</h4>
            <div className='cart__tittleBox'>
              <h4 className='cart__tittle'>Quantity</h4>
              <h4 className='cart__tittle'>Price</h4>
              <h4 className='cart__tittle'>Subtotal</h4>
            </div>
          </div>
          {cart.length > 0 ? (
            cart.map((item: any) => {
              const subtotal = item.quantity * item.price;
              return (
                <div className='cart__item' key={item._id + item.color}>
                  {/* product */}
                  <div className='cart__product'>
                    <div className='cart__imgBox'>
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className='cart__desc'>
                      <strong className='cart__name'>{item.name}</strong>
                      <p className='cart__color'>Color: {item.color}</p>
                      {/* remove button */}
                      <button
                        className='cart__removeBtn cart__removeBtn--lg'
                        onClick={() =>
                          dispatch(
                            deleteItem({ id: item._id, color: item.color })
                          )
                        }
                      >
                        <Close /> Remove
                      </button>
                      {/* quantity sm */}
                      <div className='cart__quantity cart__quantity--sm'>
                        <button
                          className='cart__quantityBtn'
                          onClick={() => {
                            if (item.quantity === 1) {
                              dispatch(
                                deleteItem({ id: item._id, color: item.color })
                              );
                            } else {
                              dispatch(
                                decreaseQuantity({
                                  id: item._id,
                                  color: item.color,
                                })
                              );
                            }
                          }}
                        >
                          <Minus />
                        </button>
                        <strong className='cart__quantityText'>
                          {item.quantity}
                        </strong>
                        <button
                          className='cart__quantityBtn'
                          onClick={() =>
                            dispatch(
                              increaseQuantity({
                                id: item._id,
                                color: item.color,
                              })
                            )
                          }
                        >
                          <Pluse />
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* quantity lg */}
                  <div className='cart__quantity cart__quantity--lg'>
                    <button
                      className='cart__quantityBtn'
                      onClick={() => {
                        if (item.quantity === 1) {
                          dispatch(
                            deleteItem({ id: item._id, color: item.color })
                          );
                        } else {
                          dispatch(
                            decreaseQuantity({
                              id: item._id,
                              color: item.color,
                            })
                          );
                        }
                      }}
                    >
                      <Minus />
                    </button>
                    <strong className='cart__quantityText'>
                      {item.quantity}
                    </strong>
                    <button
                      className='cart__quantityBtn'
                      onClick={() =>
                        dispatch(
                          increaseQuantity({
                            id: item._id,
                            color: item.color,
                          })
                        )
                      }
                    >
                      <Pluse />
                    </button>
                  </div>
                  {/* price */}
                  <div className='cart__priceBox'>
                    <h4 className='cart__price'>
                      ${addCommas(item.price.toString())}
                    </h4>
                    {/* remove button */}
                    <button
                      className='cart__removeBtn cart__removeBtn--sm'
                      onClick={() =>
                        dispatch(
                          deleteItem({ id: item._id, color: item.color })
                        )
                      }
                    >
                      <Close />
                    </button>
                  </div>
                  {/* subtotal */}
                  <div className='cart__subtotalPrice'>
                    <h4 className='cart__price'>
                      ${addCommas(subtotal.toFixed(2).toString())}
                    </h4>
                  </div>
                </div>
              );
            })
          ) : (
            <h4 className='cart__empty'>No item in your bag</h4>
          )}
        </div>
        <Coupon />
      </div>
      <CartSummary />
    </div>
  );
};

export default ShoppingCart;
