import { useNavigate } from "react-router-dom";

const ShopSubMenu = () => {
  const navigate = useNavigate();

  const handleCategoriesClick = () => {
    navigate("/shop");
  };

  return (
    <div className='shopSub'>
      {/* First Item */}
      <button className='shopSub__item' onClick={handleCategoriesClick}>
        <div className='shopSub__imgBox'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1635420811/my%20images/s-l225_u0mjdu.webp'
            alt='fashion categories'
          />
        </div>
        <div className='shopSub__descBox'>
          <h2 className='shopSub__tittle'>Categories</h2>
          <div className='shopSub__desc'>
            Buy one or buy a few and make every space where you sit more.
          </div>
        </div>
      </button>
      {/* Second item */}
      <button className='shopSub__item'>
        <div className='shopSub__imgBox'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636237758/my%20images/source_fmsoel.jpg'
            alt='fashion categories'
          />
        </div>
        <div className='shopSub__descBox'>
          <h2 className='shopSub__tittle'>Colletions</h2>
          <div className='shopSub__desc'>
            Discover some amazing collections of modern, classic and lasting
            desgns.
          </div>
        </div>
      </button>
    </div>
  );
};

export default ShopSubMenu;
