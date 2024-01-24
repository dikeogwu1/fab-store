import { useEffect, useState } from "react";
import { categoriesFilterBtn } from "../utils/local/productFilterData";
// redux
import { useDispatch, useSelector } from "react-redux";
import { filterProduct, setFilterName } from "../features/filters";
import { storeType } from "../store";

const Categories = () => {
  const [selectedButton, setSelectedButton] = useState<number>(3);
  const { filterName, filterBy } = useSelector(
    (store: storeType) => store.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const allBtn = document.querySelectorAll(".categories__btn");
    const singleButton = allBtn[2] as HTMLElement;
    // Make third button active, when no button is selected
    if (!filterBy && !filterName) {
      dispatch(
        filterProduct({
          filterBy: "categories",
          filterName: singleButton.textContent,
        })
      );
      dispatch(setFilterName({ name: singleButton.textContent }));
    }
    // Conditionally add active state
    allBtn.forEach((btn) => {
      btn.classList.remove("categories__btn--active");
      const singleButton = btn as HTMLElement;

      if (parseInt(singleButton.dataset.id!) === selectedButton) {
        btn.classList.add("categories__btn--active");
      }
    });
  }, [selectedButton]);

  return (
    <div className='categories'>
      {categoriesFilterBtn.map((btn) => {
        return (
          <button
            className='categories__btn'
            data-id={btn.id}
            key={btn.id}
            onClick={() => {
              setSelectedButton(btn.id);
              dispatch(
                filterProduct({
                  filterBy: "categories",
                  filterName: btn.name,
                })
              );
              dispatch(setFilterName({ name: btn.name }));
            }}
          >
            {btn.name}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
