import React, { useRef, useState } from "react";
import ArrowRight from "../assets/ArrowRight";
import ChevronDown from "../assets/ChevronDown";
import StarFull from "../assets/StarFull";
import StarPlan from "../assets/StarPlan";
import Review from "./Review";
import ChevronUp from "../assets/ChevronUp";
import AllStars from "./AllStars";
import { reviewsData } from "../utils/local/reviewsData";

const Reviews = () => {
  const [order, setOrder] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const sortingRef = useRef(null);
  const reviewRef = useRef(null);

  const handleSortingBox = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const selectedElement = e.target as HTMLElement;
    const sortingElement = sortingRef.current! as HTMLElement;
    sortingElement.textContent = selectedElement.textContent;
    setOrder(false);
  };

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    const reviewElement = reviewRef.current! as HTMLElement;
    if (!value) {
      reviewElement.focus();
    }
  };

  return (
    <section className='reviews'>
      <header className='reviews__header'>
        <h4 className='reviews__tittle'>Customers Reviews</h4>
        <div className='reviews__counter'>
          <div className='reviews__rating'>
            <AllStars rating={5} />
          </div>
          <strong className='reviews__count'>
            <span>11 </span>Reviews
          </strong>
        </div>
        <h5 className='reviews__tray'>Tray Table</h5>
      </header>
      {/* reviews form */}
      <form className='reviews__form'>
        <div className='reviews__emoji'>
          {value ? (
            <select>
              <option value='1'>⭐⭐⭐⭐</option>
              <option value='1'>⭐⭐⭐⭐⭐</option>
              <option value='1'>⭐⭐⭐</option>
              <option value='1'>⭐⭐</option>
              <option value='1'>⭐</option>
            </select>
          ) : (
            <strong>❤️ 🙌 👍 😊 🤣 😡</strong>
          )}
        </div>
        <input
          type='text'
          placeholder='Share your thoughts'
          name='review'
          autoComplete='off'
          ref={reviewRef}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
          className='reviews__textBox'
        />
        <button className='reviews__submitBtn' onClick={handleSubmit}>
          <span className='reviews__btnIcon'>
            <ArrowRight color={true} />
          </span>
          <span className='reviews__btnText'>
            {value ? "Submit Review" : "Write Review"}
          </span>
        </button>
      </form>
      {/* reviews */}
      <div className='reviews__item'>
        <div className='reviews__itemBox'>
          <h5 className='reviews__topic'>
            <span>11 </span> Reviews
          </h5>
          {/* reorder reviews */}
          <div className='reviews__arrangement'>
            <div className='reviews__ordering'>
              <strong className='reviews__order' ref={sortingRef}>
                Newest
              </strong>
              <button
                className='reviews__toggle'
                onClick={() => setOrder(!order)}
              >
                {order ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {order && (
              <div className='reviews__orderOptions'>
                <button className='reviews__option' onClick={handleSortingBox}>
                  Newest
                </button>
                <button className='reviews__option' onClick={handleSortingBox}>
                  Oldest
                </button>
              </div>
            )}
          </div>
        </div>

        {/* reviews container */}
        <div className='reviews__container'>
          {reviewsData.map((review) => {
            return <Review review={review} key={review.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
