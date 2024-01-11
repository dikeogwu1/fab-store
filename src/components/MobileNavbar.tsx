import { useEffect, useRef } from "react";
import BrandLogo from "./BrandLogo";
import Close from "../assets/Close";
import Search from "../assets/Search";
import { Link } from "react-router-dom";
import ChevronDown from "../assets/ChevronDown";
import CartItemsCounter from "./CartItemsCounter";
import WishListCounter from "./WishListCounter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import Youtube from "../assets/Youtube";

const MobileNavbar = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <dialog ref={dialogRef} className='mobileNav'>
      <div className='mobileNav__wrapper'>
        <div className='mobileNav__head'>
          <header className='mobileNav__header'>
            <BrandLogo />
            <button className='mobileNav__close'>
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
              <Link to='/' className='mobileNav__link'>
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
          <div className='mobileNav__authBtns'>
            <button className='mobileNav__authBtn'>Sign in</button>
            <button className='mobileNav__authBtn'>Sign up</button>
          </div>
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
