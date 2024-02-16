import { useEffect, useState } from "react";
import { pricesButtons } from "../utils/local/productFilterData";
// redux
import { useDispatch } from "react-redux";
import {
  setFilterPrice,
  setPriceGreaterThan,
  setPriceLessThan,
} from "../features/filters";

const Prices = () => {
  const [selectedButton, setSelectedButton] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const allBtn = document.querySelectorAll(".price__btn");
    allBtn.forEach((btn) => {
      btn.classList.remove("price__btn--active");
      const singleButton = btn as HTMLElement;

      if (parseInt(singleButton.dataset.id!) === selectedButton) {
        btn.classList.add("price__btn--active");
      }
    });
  }, [selectedButton]);

  return (
    <ul className='price'>
      {pricesButtons.map((btn) => {
        return (
          <li className='price__list' key={btn.id}>
            <button
              className='price__btn'
              data-id={btn.id}
              onClick={() => {
                setSelectedButton(btn.id);
                dispatch(
                  setPriceGreaterThan({ greaterThan: btn.pricesGreaterThan })
                );
                dispatch(setPriceLessThan({ lessThan: btn.pricesLessThan }));
                dispatch(setFilterPrice({ price: btn.text }));
              }}
            >
              {btn.text}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Prices;
