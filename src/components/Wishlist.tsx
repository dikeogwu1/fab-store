import Close from "../assets/Close";
import { miniCartData } from "../utils/local/miniCartData";

const Wishlist = () => {
  return (
    <section className='wishlist'>
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
        {miniCartData.map((item) => {
          const { id, images, name, price, colors } = item;
          return (
            <div className='wishlist__item' key={id}>
              <div className='wishlist__productWrapper'>
                <div className='wishlist__product'>
                  <button className='wishlist__removeBtn'>
                    <Close />
                  </button>
                  <div className='wishlist__imgBox'>
                    <img src={images[0].img} alt={name} />
                  </div>
                </div>
                <div className='wishlist___desc'>
                  <strong className='wishlist__itemName'>{name}</strong>
                  <p className='wishlist__color'>Color: {colors[0].name}</p>
                  <strong className='wishlist__price wishlist__price--sm'>
                    ${price}
                  </strong>
                </div>
              </div>
              <strong className='wishlist__price wishlist__price--lg'>
                ${price}
              </strong>

              <button className='wishlist__actionBtn'>Add to cart</button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Wishlist;
