import DiscountTag from "./DiscountTag";
import Heart from "../assets/Heart";
import AllStars from "./AllStars";
import { itemData } from "../utils/local/itemData";

type itemType = { item: (typeof itemData)[0] };

const Item = ({ item }: itemType) => {
  const { name, img, price, discount } = item;
  return (
    <div className='item'>
      <div className='item__imgBox'>
        {/* featured image */}
        <img src={img} alt={name} className='item__img' />
        {/* Hot tag */}
        {discount ? <DiscountTag newProduct={true} /> : ""}
        <button className='item__heart'>
          <Heart />
        </button>
        {/* add to cart button */}
        <button className='item__btn'>Add to cart</button>
      </div>
      <div className='item__desc'>
        <div className='item__stars'>
          <AllStars rating={5} />
        </div>
        <h4 className='item__name'>{name}</h4>
        <div className='item__prices'>
          <strong className='item__price'>{price}</strong>
          <del className='item__discount'>{discount ? discount : ""}</del>
        </div>
      </div>
    </div>
  );
};

export default Item;
