import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import ChevronRight from "../assets/ChevronRight";
import CountDownTimer from "../components/CountDownTimer";
import Pluse from "../assets/Pluse";
import Minus from "../assets/Minus";
import Heart from "../assets/Heart";
import UserRemark from "./UserRemark";
import DiscountTag from "../components/DiscountTag";
import AllStars from "../components/AllStars";
import SubNabar from "../components/SubNabar";
import { product } from "../types/product";
import { singleProduct } from "../utils/local/productData";
import Poster from "../components/Poster";
import Spinner from "../components/Spinner";

// utils
import {
  addItemToLocalStorage,
  addWishlistToLocalStorage,
} from "../utils/functions/localStorage";
import { addCommas } from "../utils/functions/addCommas";
// redux
import { useDispatch, useSelector } from "react-redux";
import { chooseColor } from "../features/color";
import { storeType } from "../store";
import {
  addToCart,
  decreaseQuantity,
  deleteItem,
  increaseQuantity,
} from "../features/cart";
import { addToWishlist } from "../features/wishlist";

const ProductLayout = () => {
  const [selectedColor, setSelectedColor] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [productData, setProductData] = useState<product>(singleProduct);
  const { color } = useSelector((store: storeType) => store.color);
  const { cart } = useSelector((store: storeType) => store.cart);
  const { wishlist } = useSelector((store: storeType) => store.wishlist);
  const dispatch = useDispatch();
  const colorRef = useRef(null);
  const { id } = useParams<string>();

  const getProducts = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url);
      setProductData(data.product);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts(`https://fabstore-server.onrender.com/api/v1/products/${id}`);
  }, [id]);

  // product full data
  const {
    _id,
    name,
    description,
    price,
    offer,
    discountPrice,
    numOfReviews,
    sizes,
    colors,
    categories,
    collections,
    images,
  } = productData;

  // Adding item to cart
  const handleAddToCart = (): void => {
    const item = {
      _id,
      name,
      price,
      quantity: 1,
      img: images[0].img,
      color: colors[selectedColor].name,
    };

    const existingItem = cart.find(
      (item: any) =>
        item._id === _id && item.color === colors[selectedColor].name
    );
    if (existingItem) {
      dispatch(
        increaseQuantity({ id: _id, color: colors[selectedColor].name })
      );
      toast.success("In your bag, you've increased the quantity of this item");
    } else {
      addItemToLocalStorage([...cart, item]);
      dispatch(addToCart());
      toast.success("You have added to your bag");
    }
  };

  const handleAddToWishlist = (): void => {
    const item = {
      _id,
      name,
      price,
      img: images[0].img,
      color: colors[selectedColor].name,
    };

    const existingItem = wishlist.find(
      (item: any) =>
        item._id === _id && item.color === colors[selectedColor].name
    );
    if (existingItem) {
      toast.success("Item exist in your wishlist");
    } else {
      addWishlistToLocalStorage([...wishlist, item]);
      dispatch(addToWishlist());
      toast.success("Item added to your wishlist");
    }
  };

  const thisItem = cart.find(
    (item: any) => item._id === _id && item.color === colors[selectedColor].name
  );

  useEffect(() => {
    const allBtn = document.querySelectorAll(".product__color");
    allBtn.forEach((btn) => {
      btn.classList.remove("product__color--active");
      const singleButton = btn as HTMLElement;

      if (parseInt(singleButton.dataset.id!) === selectedColor) {
        btn.classList.add("product__color--active");
      }
    });
    dispatch(chooseColor({ selectedColor: colors[selectedColor].name }));
  }, [selectedColor, productData]);

  if (isLoading) {
    return (
      <div className='product'>
        <Spinner />
      </div>
    );
  }

  return (
    <div className='product'>
      <ToastContainer />
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
            {images.length < 2 ? (
              <div className='product__imgWrapper'>
                {offer && <DiscountTag />}
                <div className={`product__imgBox`}>
                  <img src={images[0].img} alt='Mens short' />
                </div>
              </div>
            ) : (
              <Poster images={images} offer={offer} />
            )}
            <div className='product__bottomImages'>
              {images.map((images: any) => {
                const { id, img } = images;
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
              <div className='product__reviewCount'>{numOfReviews} Reviews</div>
            </header>
            <h4 className='product__name'>{name}</h4>
            <p className='product__desc'>{description}</p>
            <div className='product__priceBox'>
              <strong className='product__price'>
                ${addCommas(price.toFixed(2).toString())}
              </strong>
              {offer && (
                <del className='product__discount'>
                  ${addCommas(discountPrice.toFixed(2).toString())}
                </del>
              )}
            </div>
          </div>

          {offer && <CountDownTimer color={true} />}
          <div className='product__attributes'>
            <div className='product__sizeBox'>
              <h4 className='product__sizeText'>Size</h4>
              <div className='product__sizes'>
                {sizes.map((size: any) => {
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
                {color}
              </strong>
              <div className='product__colors'>
                {colors.map((color: any, i: number) => {
                  return (
                    <button
                      className='product__color'
                      key={color.id}
                      data-id={i}
                      // data-name={color.name}
                      style={{ background: `${color.hexColor}` }}
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                      ) => {
                        setSelectedColor(i);
                        dispatch(chooseColor({ selectedColor: color.name }));
                        e.currentTarget.classList.add("product__color--active");
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
                <button
                  className='product__decreament'
                  onClick={() => {
                    if (thisItem.quantity === 1) {
                      dispatch(
                        deleteItem({ id: _id, color: colors[selectedColor] })
                      );
                    } else {
                      dispatch(
                        decreaseQuantity({
                          id: _id,
                          color: colors[selectedColor].name,
                        })
                      );
                    }
                  }}
                >
                  <Minus />
                </button>
                <strong className='product__count'>
                  {thisItem ? thisItem.quantity : 0}
                </strong>
                <button
                  className='product__increament'
                  onClick={() =>
                    dispatch(
                      increaseQuantity({
                        id: _id,
                        color: colors[selectedColor].name,
                      })
                    )
                  }
                >
                  <Pluse />
                </button>
              </div>
              <button
                className='product__wishlist'
                onClick={handleAddToWishlist}
              >
                <Heart /> Wishlist
              </button>
            </div>
            <button className='product__addToCart' onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>

          <div className='product__categoryBox'>
            <div className='product__categoryDesc'>
              <h4 className='product__categoryInfo'>SKU</h4>
              <strong className='product__categoryValue'>{collections}</strong>
            </div>
            <div className='product__categoryDesc product__categoryDesc--category'>
              <h4 className='product__categoryInfo'>CATEGORY</h4>
              <strong className='product__categoryValue'>{categories}</strong>
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
