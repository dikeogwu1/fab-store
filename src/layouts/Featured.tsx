import FeaturedItem from "../components/FeaturedItem";

const Featured = () => {
  return (
    <div className='featured'>
      <header className='featured__header'>
        <h2 className='featured__tittle'>featured</h2>
        <div className='featured__wrapper'>
          <div className='featured__dot featured__dot--active'></div>
          <div className='featured__dot'></div>
          <div className='featured__dot'></div>
        </div>
      </header>
      <FeaturedItem />
    </div>
  );
};

export default Featured;
