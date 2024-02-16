import FilterIcon from "../assets/FilterIcon";
import { filters } from "../utils/local/listingData";
import FilterBtn from "../components/FilterBtn";
import ShowMore from "../components/ShowMore";
import { ToastContainer } from "react-toastify";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";
import Sorting from "../components/Sorting";
import DisplayedProducts from "./DisplayedProducts";

const AllProducts = () => {
  const { filterName, filterBy } = useSelector(
    (store: storeType) => store.filter
  );

  return (
    <section className='allProducts'>
      <ToastContainer />
      <div className='allProducts__filterBox'>
        <header className='allProducts__filterTools'>
          <div className='allProducts__firstTools'>
            {/* Filter icon and text */}
            <div className='allProducts__sign'>
              <FilterIcon />
              <strong className='allProducts__signText'>Filter</strong>
            </div>
          </div>
          {/* filter by list, to appear on small screen */}
          <div className='allProducts__filterList allProducts__filterList--sm'>
            {filters.map((item) => {
              return (
                <FilterBtn
                  id={item.id}
                  name={item.name}
                  component={item.component}
                  key={item.id}
                />
              );
            })}
          </div>
          {/* Filter by sorting */}
          <div className='allProducts__sortItem'>
            <h4 className='allProducts__filterTittle'>{filterName}</h4>
            <div className='allProducts__sortBy'>
              <Sorting />
            </div>
          </div>
        </header>

        <div className='allProducts__listing'>
          {/* Filter by list, to appear on big screen  */}
          <div className='allProducts__filterList allProducts__filterList--lg'>
            {filters.map((item) => {
              const { id, name, component } = item;
              return (
                <div className='allroducts__filterPrice' key={id}>
                  {id === 1 ? (
                    <h4 className='allProducts__topic'>{filterBy}</h4>
                  ) : (
                    <h4 className='allProducts__topic'>{name}</h4>
                  )}
                  <div className='allProducts__filterBy'>{component}</div>
                </div>
              );
            })}
          </div>

          <DisplayedProducts />
        </div>
      </div>
      <ShowMore />
    </section>
  );
};

export default AllProducts;
