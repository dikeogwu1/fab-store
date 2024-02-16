import { useNavigate } from "react-router-dom";
import { productSubData } from "../utils/local/productSubNavData";
// redux
import { useDispatch } from "react-redux";
import {
  filterProduct,
  searchByName,
  setFilterName,
} from "../features/filters";
import { closeProductDropDown } from "../features/modal";

const ProductSubMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
                    <button
                      className='productSub__name dropDown'
                      onClick={() => {
                        dispatch(searchByName(""));
                        dispatch(
                          filterProduct({
                            filterBy: type.toLowerCase(),
                            filterName: list.name,
                          })
                        );

                        if (list.name === "Men’s Set") {
                          dispatch(setFilterName({ name: "Men Set" }));
                        } else if (list.name === "Lady’s Set") {
                          dispatch(setFilterName({ name: "Lady Set" }));
                        } else {
                          dispatch(setFilterName({ name: list.name }));
                        }
                        dispatch(closeProductDropDown());
                        navigate("/shop");
                      }}
                    >
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
