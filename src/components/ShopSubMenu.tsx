import { useDispatch } from "react-redux";
// redux
import { useNavigate } from "react-router-dom";
import { filterProduct } from "../features/filters";
import { closeShopDropDown } from "../features/modal";

const ShopSubMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoriesClick = () => {
    dispatch(
      filterProduct({
        filterBy: "categories",
        filterName: `All categories`,
      })
    );
    navigate("/shop");
    dispatch(closeShopDropDown());
    window.scrollTo({ top: 500 });
  };
  const handleCollectionsClick = () => {
    dispatch(
      filterProduct({
        filterBy: "collections",
        filterName: `All collections`,
      })
    );
    navigate("/shop");
    dispatch(closeShopDropDown());
  };

  return (
    <div className='shopSub dropDown'>
      {/* First Item */}
      <button
        className='shopSub__item dropDown'
        onClick={handleCategoriesClick}
      >
        <div className='shopSub__imgBox dropDown'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635420811/my%20images/s-l225_u0mjdu.webp'
            alt='fashion categories'
            className='dropDown'
          />
        </div>
        <div className='shopSub__descBox dropDown'>
          <h2 className='shopSub__tittle dropDown'>Categories</h2>
          <div className='shopSub__desc dropDown'>
            Buy one or buy a few and make every space where you sit more.
          </div>
        </div>
      </button>
      {/* Second item */}
      <button
        className='shopSub__item dropDown'
        onClick={handleCollectionsClick}
      >
        <div className='shopSub__imgBox dropDown'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636237758/my%20images/source_fmsoel.jpg'
            alt='fashion categories'
            className='dropDown'
          />
        </div>
        <div className='shopSub__descBox dropDown'>
          <h2 className='shopSub__tittle dropDown'>Colletions</h2>
          <div className='shopSub__desc dropDown'>
            Discover some amazing collections of modern, classic and lasting
            desgns.
          </div>
        </div>
      </button>
    </div>
  );
};

export default ShopSubMenu;
