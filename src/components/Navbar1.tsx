import React from "react";
import TicketPercent from "../assets/TicketPercent";
import ArrowRight from "../assets/ArrowRight";
import Close from "../assets/Close";

const Navbar1 = () => {
  return (
    <nav className='navbar1'>
      <TicketPercent />
      <strong className='navbar1__text'>
        30% off storewide — Limited time!
      </strong>
      <button className='navbar1__btn'>
        Shop now <ArrowRight />
      </button>
      <button className='navbar1__close'>
        <Close />
      </button>
    </nav>
  );
};

export default Navbar1;
