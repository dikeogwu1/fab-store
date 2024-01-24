import { Link } from "react-router-dom";
import { itemData } from "../utils/local/itemData";
import Item from "./Item";

const FeaturedItem = () => {
  return (
    <section className='featuredItem'>
      {itemData.map((item) => {
        return (
          <Link
            to={`product/${item.id}`}
            className='featuredItem__wrapper'
            key={item.id}
          >
            <div className='featuredItem__item'>
              <Item item={item} />
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default FeaturedItem;
