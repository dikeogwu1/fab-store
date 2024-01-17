import BrandLogo from "./BrandLogo";
import Search from "../assets/Search";
import UserCircle from "../assets/UserCircle";
import ChevronDown from "../assets/ChevronDown";
import MenuLine from "../assets/MenuLine";
import CartItemsCounter from "./CartItemsCounter";
import { Link } from "react-router-dom";
// redux
import { useSelector, useDispatch } from "react-redux";
import { storeType } from "../types/reduxStore";
import { openMobileNav } from "../features/modal";

const Navbar2 = () => {
  const { isLoggedIn } = useSelector((store: storeType) => store.user);

  const dispatch = useDispatch();

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

        <li className='navbar2__item'>
          <button className='navbar2__dropDown'>Shop</button> <ChevronDown />
        </li>
        <li className='navbar2__item'>
          <button className='navbar2__dropDown'>Product</button> <ChevronDown />
        </li>

        <li className='navbar2__item'>
          <Link to='/' className='link'>
            Contact us
          </Link>
        </li>
      </ul>
      <div className='navbar2__tools'>
        <div className='navbar2__tool'>
          <Search />
          {isLoggedIn ? (
            <Link to='/profile'>
              <UserCircle />
            </Link>
          ) : (
            <div className='navbar2__authBtn'>
              <Link to='/login'>
                <button className='navbar2__logger'>Sign in</button>
              </Link>
              <Link to='/register'>
                <button className='navbar2__logger'>Register</button>
              </Link>
            </div>
          )}
        </div>

        <CartItemsCounter />
      </div>
    </nav>
  );
};

export default Navbar2;
