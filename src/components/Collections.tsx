import ArrowRight from "../assets/ArrowRight";
import { shopCollections } from "../utils/local/collectionData";

const Collections = () => {
  return (
    <div className='collections'>
      {shopCollections.map((collection, i) => {
        const { id, img, name } = collection;
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
                <button className='collections__btn'>
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
