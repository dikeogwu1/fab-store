import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import ArrowLeft from "../assets/ArrowLeft";
import { carouselData } from "../utils/local/carouselData";

const Carousel = () => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (value > carouselData.length - 1) {
      setValue(0);
    }
    if (value < 0) {
      setValue(carouselData.length - 1);
    }
  }, [value]);

  useEffect(() => {
    let duration = setInterval(() => {
      setValue(value + 1);
    }, 8000);
    return () => {
      clearInterval(duration);
    };
  }, [value]);

  return (
    <>
      <div className='carousel'>
        {/* carousel container */}
        <article className='carousel__container'>
          {carouselData.map((data, index) => {
            const { id, title, desc, img, btn, link } = data;
            let coordinate = "carousel__next";
            if (index === value) {
              coordinate = "carousel__current";
            }
            if (
              index === value - 1 ||
              (value === 0 && index === carouselData.length - 1)
            ) {
              coordinate = "carousel__prev";
            }

            return (
              <div className={`carousel__item ${coordinate}`} key={id}>
                {/* carousel image */}
                <div className='carousel__imgBox'>
                  <img src={img} alt='banner' className='carousel__img' />
                </div>
                {/* carousel item description */}
                <div className='carousel__desc'>
                  <h3 className='carousel__tittle'>{title}</h3>
                  <p className='carousel__text'>{desc}</p>
                  <Link to={`/${link}`}>
                    <button className='carousel__btn'>{btn}</button>
                  </Link>
                </div>
              </div>
            );
          })}
          <button
            className='carousel__arrowLeft'
            onClick={() => setValue(value - 1)}
          >
            <ArrowLeft />
          </button>
          <button
            className='carousel__arrowRight'
            onClick={() => setValue(value + 1)}
          >
            <ArrowRight />
          </button>
        </article>
      </div>
    </>
  );
};

export default Carousel;
