import { useEffect, useState } from "react";
import { cartSummaryData } from "../utils/local/cartSummaryData";

type check = {
  summary: (typeof cartSummaryData)[0];
};
const Checker = ({ summary }: check) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { id, text, amount } = summary;

  useEffect(() => {
    if (id === 1) {
      setIsChecked(true);
    }
  }, []);

  const handleClick = () => {
    setIsChecked(!isChecked);

    const btn = document.querySelector(".checkbox")!;
    if (id === 2 && btn.classList.contains("checkbox--active")) {
      const freeBtn = btn.parentElement?.firstChild as HTMLButtonElement;

      // remove active state from free shipping
      const freeCircle = freeBtn.firstChild?.firstChild
        ?.firstChild as HTMLDivElement;
      freeCircle.classList.remove("checkbox__circle--active");

      freeBtn.classList.remove("checkbox--active");
      freeBtn.disabled = true;
    } else {
      const freeBtn = btn.parentElement?.firstChild as HTMLButtonElement;

      // add active state from free shipping
      const freeCircle = freeBtn.firstChild?.firstChild
        ?.firstChild as HTMLDivElement;
      freeCircle.classList.add("checkbox__circle--active");

      freeBtn.classList.add("checkbox--active");
      freeBtn.disabled = false;
    }
  };

  return (
    <button
      className={`checkbox checkbox--${isChecked && "active"}`}
      onClick={handleClick}
    >
      <div className='checkbox__check'>
        <div className='checkbox__textBox'>
          <div
            className={`checkbox__circle checkbox__circle--${
              isChecked && "active"
            }`}
          ></div>
          <strong className='checkbox__text'>{text}</strong>
        </div>
        <strong className='checkbox__amount'>{amount}</strong>
      </div>
    </button>
  );
};

export default Checker;
