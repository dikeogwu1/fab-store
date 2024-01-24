import TicketPercent from "../assets/TicketPercent";
import ArrowRight from "../assets/ArrowRight";
import Close from "../assets/Close";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <nav className={isOpen ? "navbar1" : "navbar1 navbar1--hide"}>
      <TicketPercent />
      <strong className='navbar1__text'>
        30% off storewide — Limited time!
      </strong>
      <Link to='/shop' className='navbar1__btn'>
        Shop now <ArrowRight />
      </Link>
      <button className='navbar1__close' onClick={() => setIsOpen(false)}>
        <Close />
      </button>
    </nav>
  );
};

export default Navbar1;
