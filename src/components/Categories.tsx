import { useEffect, useState } from "react";
import {
  categoriesFilterBtn,
  collectionFilterBtn,
} from "../utils/local/productFilterData";
// redux
import { useDispatch, useSelector } from "react-redux";
import {
  filterProduct,
  searchByName,
  setDispayedFilter,
  setFilterName,
} from "../features/filters";
import { storeType } from "../store";

const Categories = () => {
  // const [selectedButton, setSelectedButton] = useState<string>("");
  const { filterName, filterBy, selectedName } = useSelector(
    (store: storeType) => store.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const allBtn = document.querySelectorAll(".categories__btn");
    // Make third button active, when no button is selected
    if (!filterBy && !filterName && !selectedName) {
      dispatch(
        filterProduct({
          filterBy: "categories",
          filterName: `All categories`,
        })
      );
    }
    // Conditionally add active state
    allBtn.forEach((btn) => {
      btn.classList.remove("categories__btn--active");
      const singleButton = btn as HTMLElement;

      if (singleButton.dataset.id! === filterName) {
        btn.classList.add("categories__btn--active");
      }
    });
  }, [filterName]);

  return (
    <div className='categories'>
      {(filterBy === "categories"
        ? categoriesFilterBtn
        : collectionFilterBtn
      ).map((btn) => {
        return (
          <button
            className='categories__btn'
            data-id={btn.name}
            key={btn.id}
            onClick={() => {
              dispatch(searchByName(""));
              dispatch(
                setDispayedFilter({
                  filterName: btn.name,
                })
              );
              if (btn.name === "Men’s Set") {
                dispatch(setFilterName({ name: "Men Set" }));
              } else if (btn.name === "Lady’s Set") {
                dispatch(setFilterName({ name: "Lady Set" }));
              } else {
                dispatch(setFilterName({ name: btn.name }));
              }
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
