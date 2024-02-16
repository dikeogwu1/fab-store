import { Link, useNavigate } from "react-router-dom";
import DiscountTag from "./DiscountTag";
import Heart from "../assets/Heart";
import AllStars from "./AllStars";
// utils
import { addCommas } from "../utils/functions/addCommas";
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity } from "../features/cart";
import { storeType } from "../store";
import {
  addItemToLocalStorage,
  addWishlistToLocalStorage,
} from "../utils/functions/localStorage";
import { addToWishlist } from "../features/wishlist";

const Item = ({ item }: any) => {
  const { _id, name, images, price, discountPrice, offer, colors } = item;
  const { cart } = useSelector((store: storeType) => store.cart);
  const { wishlist } = useSelector((store: storeType) => store.wishlist);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (): void => {
    const item = {
      _id,
      name,
      price,
      quantity: 1,
      img: images[0].img,
      color: colors[0].name,
    };

    const existingItem = cart.find((item: any) => item._id === _id);
    if (existingItem) {
      dispatch(increaseQuantity({ id: _id, color: colors[0].name }));
      toast.success("In your bag, you've increased the quantity of this item");
    } else {
      addItemToLocalStorage([...cart, item]);
      dispatch(addToCart());
      toast.success("you have added to your bag");
    }
  };

  const handleAddToWishlist = () => {
    const item = {
      _id,
      name,
      price,
      img: images[0].img,
      color: colors[0].name,
    };
    const existingItem = wishlist.find((item: any) => item._id === _id);
    if (existingItem) {
      toast.success("Item exist in your wishlist");
    } else {
      addWishlistToLocalStorage([...wishlist, item]);
      dispatch(addToWishlist());
      toast.success("Item added to wishlist");
    }
  };

  const handleNavigateClick = (): void => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className='item'>
      <Link to={`/product/${_id}`} className='item__navigator'></Link>
      <div className='item__imgBox'>
        {/* featured image */}
        <img
          onClick={handleNavigateClick}
          src={images[0].img}
          alt={name}
          className='item__img'
        />
        {/* Hot tag */}
        {offer ? <DiscountTag newProduct={true} /> : ""}
        <button className='item__heart' onClick={handleAddToWishlist}>
          <Heart />
        </button>
        {/* add to cart button */}
        <button className='item__btn' onClick={handleClick}>
          Add to cart
        </button>
      </div>
      <div className='item__desc'>
        <div className='item__stars'>
          <AllStars rating={5} />
        </div>
        <h4 className='item__name'>{name}</h4>
        <div className='item__prices'>
          <strong className='item__price'>{`$${addCommas(
            price.toFixed(2).toString()
          )}`}</strong>
          <del className='item__discount'>
            {discountPrice
              ? `$${addCommas(discountPrice.toFixed(2).toString())}`
              : ""}
          </del>
        </div>
      </div>
    </div>
  );
};

export default Item;
