import Close from "../assets/Close";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { deleteWishlist } from "../features/wishlist";
import { ToastContainer, toast } from "react-toastify";
import { addToCart, increaseQuantity } from "../features/cart";
import { addItemToLocalStorage } from "../utils/functions/localStorage";

const Wishlist = () => {
  const { wishlist } = useSelector((store: storeType) => store.wishlist);
  const { cart } = useSelector((store: storeType) => store.cart);
  const dispatch = useDispatch();

  return (
    <section className='wishlist'>
      <ToastContainer />
      <h3 className='wishlist__tittle'>Your Wishlist</h3>
      <header className='wishlist__wrapper  wishlist__wrapper--lg'>
        <strong className='wishlist__name wishlist__name--header'>
          Product
        </strong>
        <strong className='wishlist__name wishlist__name--price'>Price</strong>
        <strong className='wishlist__name'>Action</strong>
      </header>

      {/* First order */}
      <div className='wishlist__details'>
        {wishlist.length > 0 ? (
          wishlist.map((item: any) => {
            const { _id, img, name, price, color } = item;
            const single = {
              _id,
              name,
              price,
              quantity: 1,
              img,
              color,
            };

            const existingItem = cart.find(
              (item: any) => item._id === _id && item.color === color
            );

            return (
              <div className='wishlist__item' key={_id}>
                <div className='wishlist__productWrapper'>
                  <div className='wishlist__product'>
                    <button
                      className='wishlist__removeBtn'
                      onClick={() =>
                        dispatch(deleteWishlist({ id: _id, color: color }))
                      }
                    >
                      <Close />
                    </button>
                    <div className='wishlist__imgBox'>
                      <img src={img} alt={name} />
                    </div>
                  </div>
                  <div className='wishlist___desc'>
                    <strong className='wishlist__itemName'>{name}</strong>
                    <p className='wishlist__color'>Color: {color}</p>
                    <strong className='wishlist__price wishlist__price--sm'>
                      ${price}
                    </strong>
                  </div>
                </div>
                <strong className='wishlist__price wishlist__price--lg'>
                  ${price}
                </strong>

                <button
                  className='wishlist__actionBtn'
                  onClick={() => {
                    if (existingItem) {
                      dispatch(increaseQuantity({ id: _id, color: color }));
                      toast.success(
                        "In your bag, you've increased the quantity of this item"
                      );
                    } else {
                      addItemToLocalStorage([...cart, single]);
                      dispatch(addToCart());
                      toast.success("You have added to your bag");
                    }
                  }}
                >
                  Add to cart
                </button>
              </div>
            );
          })
        ) : (
          <strong className='wishlist__empty'>You have no wishlist</strong>
        )}
      </div>
    </section>
  );
};

export default Wishlist;
