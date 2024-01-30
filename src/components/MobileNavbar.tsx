import { useEffect, useRef } from "react";
import BrandLogo from "./BrandLogo";
import Close from "../assets/Close";
import Search from "../assets/Search";
import ChevronDown from "../assets/ChevronDown";
import CartItemsCounter from "./CartItemsCounter";
import WishListCounter from "./WishListCounter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import Youtube from "../assets/Youtube";
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../store";
import { closeMobileNav } from "../features/modal";

const MobileNavbar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { isLoggedIn } = useSelector((store: storeType) => store.user);
  const { isMobileNav } = useSelector((store: storeType) => store.modal);
  const dispatch = useDispatch();

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
            <button className='mobileNav__searchBtn'>
              <Search />
            </button>
            <input
              type='text'
              className='mobileNav__input'
              placeholder='Search'
            />
          </form>
          <ul className='mobileNav__list'>
            <li className='mobileNav__item'>
              <Link to='/' className='mobileNav__link'>
                Home
              </Link>
            </li>

            <li className='mobileNav__item'>
              <button className='mobileNav__dropDown'>Shop</button>
              <ChevronDown />
            </li>
            <li className='mobileNav__item'>
              <button className='mobileNav__dropDown'>Product</button>
              <ChevronDown />
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
