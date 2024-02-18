import { useState } from "react";
import ChevronUp from "../assets/ChevronUp";
import ChevronDown from "../assets/ChevronDown";
import { filters } from "../utils/local/listingData";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";

type btnType = (typeof filters)[0];

const FilterBtn = ({ name, id, component }: btnType) => {
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const { selectedName, selectedPrice, filterBy, filterName } = useSelector(
    (store: storeType) => store.filter
  );

  return (
    <div className='filterBtn'>
      <h4 className='filterBtn__topic'>{filterBy || name}</h4>

      <button
        className='filterBtn__toggle'
        onClick={() => {
          setOpenOptions(!openOptions);
        }}
      >
        {id === 1 && (
          <strong className='filterBtn__topic'>
            {filterName || selectedName}
          </strong>
        )}
        {id === 2 && (
          <strong className='filterBtn__topic'>{selectedPrice}</strong>
        )}

        {openOptions ? <ChevronUp /> : <ChevronDown />}
      </button>
      {openOptions && <div className='filterBtn__filterBy'>{component}</div>}
    </div>
  );
};

export default FilterBtn;
