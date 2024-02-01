import Close from "../assets/Close";
import Minus from "../assets/Minus";
import Pluse from "../assets/Pluse";
import { miniCartData } from "../utils/local/miniCartData";
import CartSummary from "./CartSummary";
import Coupon from "./Coupon";

const ShoppingCart = () => {
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
          {miniCartData.map((item) => {
            return (
              <div className='cart__item' key={item.id}>
                {/* product */}
                <div className='cart__product'>
                  <div className='cart__imgBox'>
                    <img src={item.images[0].img} alt='fashion product' />
                  </div>
                  <div className='cart__desc'>
                    <strong className='cart__name'>{item.name}</strong>
                    <p className='cart__color'>Color: {item.colors[0].name}</p>
                    {/* remove button */}
                    <button className='cart__removeBtn cart__removeBtn--lg'>
                      <Close /> Remove
                    </button>
                    {/* quantity sm */}
                    <div className='cart__quantity cart__quantity--sm'>
                      <button className='cart__quantityBtn'>
                        <Minus />
                      </button>
                      <strong className='cart__quantityText'>2</strong>
                      <button className='cart__quantityBtn'>
                        <Pluse />
                      </button>
                    </div>
                  </div>
                </div>
                {/* quantity lg */}
                <div className='cart__quantity cart__quantity--lg'>
                  <button className='cart__quantityBtn'>
                    <Minus />
                  </button>
                  <strong className='cart__quantityText'>2</strong>
                  <button className='cart__quantityBtn'>
                    <Pluse />
                  </button>
                </div>
                {/* price */}
                <div className='cart__priceBox'>
                  <h4 className='cart__price'>${item.price}</h4>
                  {/* remove button */}
                  <button className='cart__removeBtn cart__removeBtn--sm'>
                    <Close />
                  </button>
                </div>
                {/* subtotal */}
                <div className='cart__subtotalPrice'>
                  <h4 className='cart__price'>$38.00</h4>
                </div>
              </div>
            );
          })}
        </div>
        <Coupon />
      </div>
      <CartSummary />
    </div>
  );
};

export default ShoppingCart;
