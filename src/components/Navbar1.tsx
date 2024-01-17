import TicketPercent from "../assets/TicketPercent";
import ArrowRight from "../assets/ArrowRight";
import Close from "../assets/Close";
import { useEffect, useState } from "react";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  // useEffect(() => {
  //   setIsOpen(true);
  // }, []);

  return (
    <nav className={isOpen ? "navbar1" : "navbar1 navbar1--hide"}>
      <TicketPercent />
      <strong className='navbar1__text'>
        30% off storewide — Limited time!
      </strong>
      <button className='navbar1__btn'>
        Shop now <ArrowRight />
      </button>
      <button className='navbar1__close' onClick={() => setIsOpen(false)}>
        <Close />
      </button>
    </nav>
  );
};

export default Navbar1;
