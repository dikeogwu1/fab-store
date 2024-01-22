import { singleReview } from "../types/random";
import AllStars from "./AllStars";
import { FaUserCircle } from "react-icons/fa";

const Review = ({ review }: singleReview) => {
  const { id, img, rating, name, desc } = review;
  return (
    <div className='review'>
      <header className='review__header'>
        {img ? (
          <div className='review__imgBox'>
            <img src={img} alt={name} className='review__thumbnail' />
          </div>
        ) : (
          <div className='review__imgBox'>
            <FaUserCircle className='review__thumbnail' />
          </div>
        )}
        <div className='review__name'>
          <h4 className='review__userName'>{name}</h4>
          <AllStars rating={rating} />
        </div>
      </header>
      <p className='review__desc'>{desc}</p>
    </div>
  );
};

export default Review;
