import { useNavigate } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import { shopCollections } from "../utils/local/collectionData";
// redux
import { useDispatch } from "react-redux";
import {
  filterProduct,
  searchByName,
  setFilterName,
} from "../features/filters";

const Collections = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='collections'>
      {shopCollections.map((collection, i) => {
        const { id, img, name, link } = collection;
        let coordinate: string = "column";
        if (i === 0) {
          coordinate = "firstColumn";
        }
        return (
          <div
            className={`collections__item collections__item--${coordinate}`}
            key={id}
          >
            <img src={img} alt={name} className='collection_img' />
            <div className='collections__desc'>
              <h4 className='collections__name'>{name}</h4>
              <div className='collections__link'>
                <button
                  className='collections__btn'
                  onClick={() => {
                    dispatch(searchByName(""));
                    dispatch(
                      filterProduct({
                        filterBy: "collections",
                        filterName: name,
                      })
                    );
                    dispatch(setFilterName({ name: link }));
                    navigate("/shop");
                  }}
                >
                  Collections <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
