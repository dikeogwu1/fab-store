import BrandLogo from "./BrandLogo";
import { Link } from "react-router-dom";
import Search from "../assets/Search";
import UserCircle from "../assets/UserCircle";
import ChevronDown from "../assets/ChevronDown";
import MenuLine from "../assets/MenuLine";
import CartItemsCounter from "./CartItemsCounter";

const Navbar2 = () => {
  return (
    <nav className='navbar2'>
      <div className='navbar2__brand'>
        <button className='navbar2__menuBtn'>
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
          <UserCircle />
        </div>

        <CartItemsCounter />
      </div>
    </nav>
  );
};

export default Navbar2;
