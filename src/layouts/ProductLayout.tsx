import { Link } from "react-router-dom";
import ChevronRight from "../assets/ChevronRight";
import ArrowLeft from "../assets/ArrowLeft";
import ArrowRight from "../assets/ArrowRight";
import { useEffect, useState } from "react";
import StarFull from "../assets/StarFull";
import CountDownTimer from "../components/CountDownTimer";
import Pluse from "../assets/Pluse";
import Minus from "../assets/Minus";
import Heart from "../assets/Heart";
import UserRemark from "./UserRemark";
import DiscountTag from "../components/DiscountTag";
import AllStars from "../components/AllStars";

const images = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dikeogwu1/image/upload/v1705269669/Fabstore%20e-commerce/Short4_lhgvds.jpg",
  },
];

const ProductLayout = () => {
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
    <div className='product'>
      <header className='product__header'>
        <Link to='/' className='product__link'>
          Home <ChevronRight />
        </Link>
        <Link to='/' className='product__link'>
          Shop <ChevronRight />
        </Link>
        <Link to='/' className='product__link'>
          Men's short <ChevronRight />
        </Link>
        <Link to='/' className='product__link product__link--active'>
          Product
        </Link>
      </header>
      {/* PRODUCT INFO */}
      <div className='product__box'>
        <section className='product__item'>
          {/* poster */}
          <div className='product__poster'>
            <div className='product__imgWrapper'>
              <DiscountTag />
              {images.map((image, index) => {
                const { id, img } = image;
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
            <div className='product__bottomImages'>
              {images.map((image) => {
                const { id, img } = image;
                return (
                  <div className='product__image' key={id}>
                    <img src={img} alt='product' />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className='product__descBox'>
          <div className='product__descWrapper'>
            <header className='product__descHeader'>
              <div className='product__stars'>
                <AllStars rating={5} />
              </div>
              <div className='product__reviewCount'>11 Reviews</div>
            </header>
            <h4 className='product__name'>Men's short</h4>
            <p className='product__desc'>
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className='product__priceBox'>
              <strong className='product__price'>$199.00</strong>
              <del className='product__discount'>$199.00</del>
            </div>
          </div>

          <CountDownTimer color={true} />
          <div className='product__attributes'>
            <div className='product__sizeBox'>
              <h4 className='product__sizeText'>Size</h4>
              <div className='product__sizes'>
                <button className='product__size'>M</button>
                <button className='product__size'>XL</button>
                <button className='product__size'>XXL</button>
              </div>
            </div>

            <div className='product__colorBox'>
              <h4 className='product__colorText'>
                Choose Color <ChevronRight />
              </h4>
              <strong className='product__colorName'>Black</strong>
              <div className='product__colors'>
                <button className='product__color'></button>
                <button className='product__color'></button>
                <button className='product__color'></button>
              </div>
            </div>
          </div>

          <div className='product__actions'>
            <div className='product__btnBox'>
              <div className='product__countBox'>
                <button className='product__decreament'>
                  <Minus />
                </button>
                <strong className='product__count'>2</strong>
                <button className='product__increament'>
                  <Pluse />
                </button>
              </div>
              <button className='product__wishlist'>
                <Heart /> Wishlist
              </button>
            </div>
            <button className='product__addToCart'>Add to Cart</button>
          </div>

          <div className='product__categoryBox'>
            <div className='product__categoryDesc'>
              <h4 className='product__categoryInfo'>SKU</h4>
              <strong className='product__categoryValue'>1117</strong>
            </div>
            <div className='product__categoryDesc product__categoryDesc--category'>
              <h4 className='product__categoryInfo'>CATEGORY</h4>
              <strong className='product__categoryValue'>Men's short</strong>
            </div>
          </div>
        </section>
      </div>

      {/* PRODUCT REMARK */}
      <div className='product__remark'>
        <UserRemark />
      </div>
    </div>
  );
};

export default ProductLayout;
