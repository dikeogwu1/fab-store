import { useEffect, useRef, useState } from "react";
import BrandLogo from "./BrandLogo";
import Close from "../assets/Close";
import Search from "../assets/Search";
import ChevronDown from "../assets/ChevronDown";
import ChevronUp from "../assets/ChevronUp";
import CartItemsCounter from "./CartItemsCounter";
import WishListCounter from "./WishListCounter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import Youtube from "../assets/Youtube";
import { Link, useNavigate } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../store";
import { closeMobileNav } from "../features/modal";
import {
  filterProduct,
  searchByName,
  setDispayedFilter,
  setFilterName,
} from "../features/filters";
import { productSubData } from "../utils/local/productSubNavData";

const MobileNavbar = () => {
  const [isShopSub, setIsShopSub] = useState(false);
  const [isProduct, setIsProduct] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isLoggedIn } = useSelector((store: storeType) => store.user);
  const { isMobileNav } = useSelector((store: storeType) => store.modal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobileNav) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        dialogRef.current?.classList.add("mobileNav--open");
      }, 60);
    } else {
      dialogRef.current?.classList.remove("mobileNav--open");
      setTimeout(() => {
        dialogRef.current?.close();
        document.body.style.overflow = "auto";
      }, 200);
    }

    const checkScreenSize = (): void => {
      if (window.innerWidth > 768) {
        dispatch(closeMobileNav());
      }
    };

    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [isMobileNav]);

  const closeMobileNavbar = (): void => {
    dispatch(closeMobileNav());
  };

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    const targetElement = e.target as HTMLElement;
    if (targetElement.classList[0] === "mobileNav") {
      dispatch(closeMobileNav());
    }
  };

  // Submiting mobile search
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (inputRef.current?.value) {
      dispatch(searchByName(inputRef.current?.value));
      dispatch(setFilterName({ name: "" }));
      dispatch(setDispayedFilter({ filterName: inputRef.current.value }));
      dispatch(closeMobileNav());
      navigate("/shop");
    }
  };

  // handle clicking on categories button
  const handleCategoriesClick = () => {
    setIsShopSub(false);
    dispatch(
      filterProduct({
        filterBy: "categories",
        filterName: `All categories`,
      })
    );
    navigate("/shop");
    dispatch(closeMobileNav());
  };

  // handle clicking on collections button
  const handleCollectionsClick = () => {
    setIsShopSub(false);
    dispatch(
      filterProduct({
        filterBy: "collections",
        filterName: `All collections`,
      })
    );
    navigate("/shop");
    dispatch(closeMobileNav());
  };

  return (
    <dialog ref={dialogRef} className='mobileNav' onClick={handleClick}>
      <div className='mobileNav__wrapper'>
        <div className='mobileNav__head'>
          <header className='mobileNav__header'>
            <BrandLogo />
            <button className='mobileNav__close' onClick={closeMobileNavbar}>
              <Close />
            </button>
          </header>
          <form className='mobileNav__searchBar'>
            <button className='mobileNav__searchBtn' onClick={handleSubmit}>
              <Search />
            </button>
            <input
              type='text'
              className='mobileNav__input'
              placeholder='Search'
              ref={inputRef}
            />
          </form>
          <ul className='mobileNav__list'>
            <li className='mobileNav__item'>
              <Link to='/' className='mobileNav__link'>
                Home
              </Link>
            </li>
            {/* Shop */}
            <li
              className={`mobileNav__item ${
                isShopSub && "mobileNav__item--open"
              }`}
            >
              <button
                className='mobileNav__dropDown'
                onClick={() => setIsShopSub(!isShopSub)}
              >
                <span>Shop</span>
                <span>{isShopSub ? <ChevronUp /> : <ChevronDown />}</span>
              </button>
              <div className='mobileNav__subItem'>
                <button
                  className='mobileNav__sub'
                  onClick={handleCategoriesClick}
                >
                  Categories
                </button>
                <button
                  className='mobileNav__sub'
                  onClick={handleCollectionsClick}
                >
                  Collections
                </button>
              </div>
            </li>

            {/* Product */}
            <li
              className={`mobileNav__item ${
                isProduct && "mobileNav__item--open"
              }`}
            >
              <button
                className='mobileNav__dropDown'
                onClick={() => setIsProduct(!isProduct)}
              >
                <span>Product</span>
                <span>{isProduct ? <ChevronUp /> : <ChevronDown />}</span>
              </button>
              <div className='mobileNav__subItem'>
                {productSubData.map((item) => {
                  const { id, type, data } = item;
                  return (
                    <div key={id}>
                      <strong className='mobileNav__subTopic'>{type}</strong>
                      <div>
                        {data.map((list) => {
                          return (
                            <button
                              className='mobileNav__sub'
                              key={list.id}
                              onClick={() => {
                                setIsProduct(false);
                                dispatch(searchByName(""));
                                dispatch(
                                  filterProduct({
                                    filterBy: type.toLowerCase(),
                                    filterName: list.name,
                                  })
                                );

                                if (list.name === "Men’s Set") {
                                  dispatch(setFilterName({ name: "Men Set" }));
                                } else if (list.name === "Lady’s Set") {
                                  dispatch(setFilterName({ name: "Lady Set" }));
                                } else {
                                  dispatch(setFilterName({ name: list.name }));
                                }
                                dispatch(closeMobileNav());
                                navigate("/shop");
                              }}
                            >
                              {list.name}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </li>

            <li className='mobileNav__item'>
              <Link to='/contact' className='mobileNav__link'>
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        <div className='mobileNav__bottom'>
          <div className='mobileNav__cartItemsCount'>
            <strong className='mobileNav__strong'>Cart</strong>
            <CartItemsCounter />
          </div>
          <div className='mobileNav__wishListCount'>
            <strong className='mobileNav__strong'>WishList</strong>
            <WishListCounter />
          </div>
          {/* check if user is logged in */}
          {isLoggedIn ? (
            <div className='mobileNav__authBtn'>
              <Link to='/profile' className='link'>
                <button className='mobileNav__logger'>Dashboard</button>
              </Link>
            </div>
          ) : (
            <div className='mobileNav__authBtn'>
              <Link to='/login' className='link'>
                <button className='mobileNav__logger'>Sign in</button>
              </Link>
              <Link to='register' className='link'>
                <button className='mobileNav__logger'>Register</button>
              </Link>
            </div>
          )}
          <div className='mobileNav__socials'>
            <button className='mobileNav__social'>
              <Instagram />
            </button>
            <button className='mobileNav__social'>
              <Facebook />
            </button>
            <button className='mobileNav__social'>
              <Youtube />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default MobileNavbar;
