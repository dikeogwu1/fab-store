import { useSelector } from "react-redux";
import Heart from "../assets/Heart";
// redux
import { storeType } from "../store";

const WishListCounter = () => {
  const { wishlist } = useSelector((store: storeType) => store.wishlist);
  return (
    <div className='wishCounter'>
      <button className='wishCounter__btn'>
        <Heart />
      </button>
      <div className='wishCounter__wishCount'>{wishlist.length}</div>
    </div>
  );
};

export default WishListCounter;
