import Heart from "../assets/Heart";
import StarFull from "../assets/StarFull";
import { featuredItemData } from "../utils/local/featuredItemData";

const FeaturedItem = () => {
  return (
    <section className='featuredItem'>
      {featuredItemData.map((item) => {
        const { id, name, img, price, discount } = item;
        return (
          <div className='featuredItem__wrapper' key={id}>
            <div className='featuredItem__imgBox'>
              {/* featured image */}
              <img src={img} alt={name} className='featuredItem__img' />
              {/* Hot tag */}
              <div className='featuredItem__tags'>
                <strong className='featuredItem__tag'>Hot</strong>
                {discount ? (
                  <strong className='featuredItem__tag  featuredItem__tag--discounted'>
                    -50%
                  </strong>
                ) : (
                  ""
                )}
              </div>
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
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedItem;
