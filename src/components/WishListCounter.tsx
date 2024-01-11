import Heart from "../assets/Heart";

const WishListCounter = () => {
  return (
    <div className='wishCounter'>
      <button className='wishCounter__btn'>
        <Heart />
      </button>
      <div className='wishCounter__wishCount'>0</div>
    </div>
  );
};

export default WishListCounter;
