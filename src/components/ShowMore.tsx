// redux
import { useDispatch, useSelector } from "react-redux";
import { showMoreProducts } from "../features/filters";
import { storeType } from "../store";

const ShowMore = () => {
  const { limit } = useSelector((store: storeType) => store.filter);
  const dispatch = useDispatch();
  return (
    <div className='showMore'>
      <button
        disabled={limit === 15 && true}
        className='showMore__showBtn'
        onClick={() => dispatch(showMoreProducts(3))}
      >
        Show more
      </button>
    </div>
  );
};

export default ShowMore;
