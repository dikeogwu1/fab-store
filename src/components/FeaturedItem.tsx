import { Link } from "react-router-dom";
import Heart from "../assets/Heart";
import StarFull from "../assets/StarFull";
import { featuredItemData } from "../utils/local/featuredItemData";
import DiscountTag from "./DiscountTag";

const FeaturedItem = () => {
  return (
    <section className='featuredItem'>
      {featuredItemData.map((item) => {
        const { id, name, img, price, discount } = item;
        return (
          <Link to={`product/${id}`} className='featuredItem__wrapper' key={id}>
            <div className='featuredItem__imgBox'>
              {/* featured image */}
              <img src={img} alt={name} className='featuredItem__img' />
              {/* Hot tag */}
              {discount ? <DiscountTag /> : ""}
              <button className='featuredItem__heart'>
                <Heart />
              </button>
              {/* add to cart button */}
              <button className='featuredItem__btn'>Add to cart</button>
            </div>
            <div className='featuredItem__desc'>
              <div className='featuredItem__stars'>
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
                <StarFull />
              </div>
              <h4 className='featuredItem__name'>{name}</h4>
              <div className='featuredItem__prices'>
                <strong className='featuredItem__price'>{price}</strong>
                <del className='featuredItem__discount'>
                  {discount ? discount : ""}
                </del>
              </div>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default FeaturedItem;
