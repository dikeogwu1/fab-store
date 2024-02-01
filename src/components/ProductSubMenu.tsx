import { productSubData } from "../utils/local/productSubNavData";

const ProductSubMenu = () => {
  return (
    <div className='productSub dropDown'>
      {productSubData.map((item) => {
        const { id, type, data } = item;
        return (
          <div className='productSub__item dropDown' key={id}>
            <h4 className='productSub__tittle dropDown'>{type}</h4>
            <div className='productSub__subItem dropDown'>
              {data.map((list) => {
                return (
                  <div className='productSub__list dropDown' key={list.id}>
                    <button className='productSub__name dropDown'>
                      {list.name}
                    </button>
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
