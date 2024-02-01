import ChevronRight from "../assets/ChevronRight";
import ArrowLeft from "../assets/ArrowLeft";
import ArrowRight from "../assets/ArrowRight";
import { useEffect, useRef, useState } from "react";
import CountDownTimer from "../components/CountDownTimer";
import Pluse from "../assets/Pluse";
import Minus from "../assets/Minus";
import Heart from "../assets/Heart";
import UserRemark from "./UserRemark";
import DiscountTag from "../components/DiscountTag";
import AllStars from "../components/AllStars";
import { productData } from "../utils/local/productData";
import SubNabar from "../components/SubNabar";

const ProductLayout = () => {
  const [value, setValue] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(2);
  const colorRef = useRef(null);

  // product full data
  const {
    name,
    description,
    price,
    offer,
    discountPrice,
    sizes,
    colors,
    category,
    images,
    reviews,
  } = productData;

  useEffect(() => {
    if (value > images.length - 1) {
      setValue(0);
    }
    if (value < 0) {
      setValue(images.length - 1);
    }
  }, [value]);

  useEffect(() => {
    const allBtn = document.querySelectorAll(".product__color");
    allBtn.forEach((btn) => {
      btn.classList.remove("product__color--active");
      const singleButton = btn as HTMLElement;

      if (parseInt(singleButton.dataset.id!) === selectedColor) {
        btn.classList.add("product__color--active");
      }
    });
  }, [selectedColor]);

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
        <SubNabar active={false} url='/' name='Home' />
        <SubNabar active={false} url='/shop' name='Shop' />
        <button className='product__link'>
          Men's short <ChevronRight />
        </button>
        <SubNabar active={true} url='/product' name='Product' />
      </header>
      {/* PRODUCT INFO */}
      <div className='product__box'>
        <section className='product__item'>
          {/* poster */}
          <div className='product__poster'>
            <div className='product__imgWrapper'>
              {offer && <DiscountTag />}
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
              <div className='product__reviewCount'>{reviews} Reviews</div>
            </header>
            <h4 className='product__name'>{name}</h4>
            <p className='product__desc'>{description}</p>
            <div className='product__priceBox'>
              <strong className='product__price'>${price}</strong>
              {offer && (
                <del className='product__discount'>${discountPrice}</del>
              )}
            </div>
          </div>

          {offer && <CountDownTimer color={true} />}
          <div className='product__attributes'>
            <div className='product__sizeBox'>
              <h4 className='product__sizeText'>Size</h4>
              <div className='product__sizes'>
                {sizes.map((size) => {
                  return (
                    <button className='product__size' key={size.id}>
                      {size.size}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className='product__colorBox'>
              <h4 className='product__colorText'>
                Choose Color <ChevronRight />
              </h4>
              <strong className='product__colorName' ref={colorRef}>
                Black
              </strong>
              <div className='product__colors'>
                {colors.map((color, i) => {
                  return (
                    <button
                      className='product__color'
                      key={color.id}
                      data-id={i}
                      data-name={color.name}
                      style={{ background: `${color.hexColor}` }}
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
                        setSelectedColor(i);
                        e.currentTarget.classList.add("product__color--active");
                        const colorName = colorRef.current! as HTMLElement;
                        colorName.textContent = e.currentTarget.dataset.name!;
                      }}
                    ></button>
                  );
                })}
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
              <strong className='product__categoryValue'>{category}</strong>
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
