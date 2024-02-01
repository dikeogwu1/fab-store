import { useState } from "react";
import ChevronUp from "../assets/ChevronUp";
import ChevronDown from "../assets/ChevronDown";
import { filters } from "../utils/local/listingData";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";

type btnType = (typeof filters)[0];

const FilterBtn = ({ name, component }: btnType) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const { selectedName, selectedPrice } = useSelector(
    (store: storeType) => store.filter
  );

  return (
    <div className='filterBtn'>
      <h4 className='filterBtn__topic'>{name}</h4>

      <button
        className='filterBtn__toggle'
        onClick={() => {
          setOpenOptions(!openOptions);
        }}
      >
        <strong className='filterBtn__topic'>
          {name === "Categories" || name === "Collections"
            ? selectedName
            : selectedPrice}
        </strong>
        {openOptions ? <ChevronUp /> : <ChevronDown />}
      </button>
      {openOptions && <div className='filterBtn__filterBy'>{component}</div>}
    </div>
  );
};

export default FilterBtn;
