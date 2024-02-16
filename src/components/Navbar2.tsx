import BrandLogo from "./BrandLogo";
import Search from "../assets/Search";
import UserCircle from "../assets/UserCircle";
import ChevronDown from "../assets/ChevronDown";
import MenuLine from "../assets/MenuLine";
import CartItemsCounter from "./CartItemsCounter";
import { Link } from "react-router-dom";
import ChevronUp from "../assets/ChevronUp";
import ShopSubMenu from "./ShopSubMenu";
import ProductSubMenu from "./ProductSubMenu";

// redux
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../store";
import {
  closeProductDropDown,
  closeShopDropDown,
  openMobileNav,
  openSearchModal,
  toggleProductDropDown,
  toggleShopDropDown,
} from "../features/modal";
import { useEffect } from "react";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
import { userLogin } from "../features/user";
import axios from "axios";

const Navbar2 = () => {
  const { isLoggedIn } = useSelector((store: storeType) => store.user);
  const { isShopDropDown, isProductDropDown } = useSelector(
    (store: storeType) => store.modal
  );
  const dispatch = useDispatch();

  const getCurrentUser = async (url: string) => {
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
        },
      });

      data.user && dispatch(userLogin());
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser("https://fabstore-server.onrender.com/api/v1/users/showMe");
  }, []);

  return (
    <nav className='navbar2'>
      <div className='navbar2__brand'>
        <button
          className='navbar2__menuBtn'
          onClick={() => dispatch(openMobileNav())}
        >
          <MenuLine />
        </button>
        <BrandLogo />
      </div>
      <ul className='navbar2__list'>
        <li className='navbar2__item'>
          <Link to='/' className='link'>
            Home
          </Link>
        </li>

        <li
          className='navbar2__item dropDown'
          onClick={() => {
            dispatch(toggleShopDropDown());
            dispatch(closeProductDropDown());
          }}
        >
          <button className='navbar2__dropDown dropDown'>Shop</button>
          {isShopDropDown ? <ChevronUp nav={true} /> : <ChevronDown />}
        </li>
        <li
          className='navbar2__item dropDown'
          onClick={() => {
            dispatch(toggleProductDropDown());
            dispatch(closeShopDropDown());
          }}
        >
          <button className='navbar2__dropDown dropDown'>Product</button>
          {isProductDropDown ? <ChevronUp nav={true} /> : <ChevronDown />}
        </li>

        <li className='navbar2__item'>
          <Link to='/contact' className='link'>
            Contact us
          </Link>
        </li>
      </ul>
      <div className='navbar2__tools'>
        <div className='navbar2__tool'>
          <button
            className='navbar2__search'
            onClick={() => dispatch(openSearchModal())}
          >
            <Search />
          </button>
          {isLoggedIn ? (
            <Link to='/profile'>
              <UserCircle />
            </Link>
          ) : (
            <div className='navbar2__authBtn'>
              <Link to='/login' className='navbar2__logger'>
                Sign in
              </Link>
              <Link to='/register' className='navbar2__logger'>
                Register
              </Link>
            </div>
          )}
        </div>

        <CartItemsCounter />
        {isShopDropDown && <ShopSubMenu />}
        {isProductDropDown && <ProductSubMenu />}
      </div>
    </nav>
  );
};

export default Navbar2;
