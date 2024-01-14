import { shopCategories } from "../utils/local/shopCategories";

const ShopCategory = () => {
  return (
    <div className='shopCategory'>
      {shopCategories.map((item) => {
        const { name, id, img } = item;
        return (
          <div className='shopCategory__item' key={id}>
            <div className='shopCategory__imgBox'>
              <img src={img} alt={name} className='shopCategory__img' />
            </div>
            <h4 className='shopCategory__name'>{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default ShopCategory;
