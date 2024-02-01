import { useNavigate } from "react-router-dom";

const ShopSubMenu = () => {
  const navigate = useNavigate();

  const handleCategoriesClick = () => {
    navigate("/shop");
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
      <button className='shopSub__item dropDown'>
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
