import FilterIcon from "../assets/FilterIcon";
import { filters } from "../utils/local/listingData";
import { itemData } from "../utils/local/itemData";
import { Link } from "react-router-dom";
import Item from "../components/Item";
import FilterBtn from "../components/FilterBtn";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";
import Sorting from "../components/Sorting";
import ShowMore from "../components/ShowMore";

const AllProducts = () => {
  const { filterName } = useSelector((store: storeType) => store.filter);

  return (
    <section className='allProducts'>
      <div className='allProducts__filterBox'>
        <header className='allProducts__filterTools'>
          <div className='allProducts__firstTools'>
            {/* Filter icon and text */}
            <div className='allProducts__sign'>
              <FilterIcon />
              <strong className='allProducts__signText'>Filter</strong>
            </div>
          </div>
          {/* filter by list, to appear small screen */}
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
            <Sorting />
          </div>
        </header>

        <div className='allProducts__listing'>
          {/* Filter by list, to appear big screen  */}
          <div className='allProducts__filterList allProducts__filterList--lg'>
            {filters.map((item) => {
              const { id, name, component } = item;
              return (
                <div className='allroducts__filterPrice' key={id}>
                  <h4 className='allProducts__topic'>{name}</h4>
                  <div className='allProducts__filterBy'>{component}</div>
                </div>
              );
            })}
          </div>

          {/* All products */}
          <div className='allProducts__listingWrapper'>
            {itemData.map((item) => {
              return (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <Item item={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <ShowMore />
    </section>
  );
};

export default AllProducts;
