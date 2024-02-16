import { useState, useEffect } from "react";
import { singleProduct } from "../utils/local/productData";
import ArrowRight from "../assets/ArrowRight";
import ArrowLeft from "../assets/ArrowLeft";
import DiscountTag from "./DiscountTag";

// STYING IS APPLYING FROM (productLayout.scss)

const Poster = ({
  images,
  offer,
}: {
  images: typeof singleProduct.images;
  offer: boolean;
}) => {
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    if (value > images.length - 1) {
      setValue(0);
    }
    if (value < 0) {
      setValue(images.length - 1);
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
    <div className='product__imgWrapper'>
      {offer && <DiscountTag />}
      {images.map((images: any, index: number) => {
        const { id, img } = images;
        let coordinate = "product__next";
        if (index === value) {
          coordinate = "product__current";
        }
        if (
          index === value - 1 ||
          (value === 0 && index === images.length - 1)
        ) {
          coordinate = "product__prev";
        }
        return (
          <div className={`product__imgBox ${coordinate}`} key={id}>
            <img src={img} alt='Mens short' />
          </div>
        );
      })}
      <button
        className='product__arrowLeft'
        onClick={() => setValue(value - 1)}
      >
        <ArrowLeft />
      </button>
      <button
        className='product__arrowRight'
        onClick={() => setValue(value + 1)}
      >
        <ArrowRight />
      </button>
    </div>
  );
};

export default Poster;
