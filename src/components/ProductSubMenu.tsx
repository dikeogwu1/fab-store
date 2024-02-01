import { productSubData } from "../utils/local/productSubNavData";

const ProductSubMenu = () => {
  return (
    <div className='productSub'>
      {productSubData.map((item) => {
        const { id, type, data } = item;
        return (
          <div className='productSub__item' key={id}>
            <h4 className='productSub__tittle'>{type}</h4>
            <div className='productSub__subItem'>
              {data.map((list) => {
                return (
                  <div className='productSub__list' key={list.id}>
                    <button className='productSub__name'>{list.name}</button>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductSubMenu;
