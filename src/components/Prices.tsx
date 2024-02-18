import { useEffect, useState } from "react";
import { pricesButtons } from "../utils/local/productFilterData";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  setFilterPrice,
  setPriceGreaterThan,
  setPriceLessThan,
} from "../features/filters";
import { storeType } from "../store";

const Prices = () => {
  const { selectedPrice } = useSelector((store: storeType) => store.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const allBtn = document.querySelectorAll(".price__btn");
    allBtn.forEach((btn) => {
      btn.classList.remove("price__btn--active");
      const singleButton = btn as HTMLElement;

      if (singleButton.dataset.name! === selectedPrice) {
        btn.classList.add("price__btn--active");
      }
    });
  }, [selectedPrice]);

  return (
    <ul className='price'>
      {pricesButtons.map((btn) => {
        return (
          <li className='price__list' key={btn.id}>
            <button
              className='price__btn'
              data-name={btn.text}
              onClick={() => {
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
