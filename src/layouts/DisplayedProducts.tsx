import { useEffect } from "react";
import Item from "../components/Item";
import useProduct from "../utils/customHooks/useProduct";
import Spinner from "../components/Spinner";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";

const DisplayedProducts = () => {
  const { isLoading, productData, getProducts } = useProduct();
  const {
    selectedName,
    pricesGreaterThan,
    pricesLessThan,
    filterBy,
    limit,
    searchName,
  } = useSelector((store: storeType) => store.filter);

  useEffect(() => {
    if (searchName) {
      setTimeout(() => {
        window.scrollTo({ top: 500 });
      }, 1000);
      getProducts(
        `https://fabstore-server.onrender.com/api/v1/products?fields=offer,name,images,price,colors&name=${searchName}`
      );
    } else if (selectedName && !pricesLessThan && !searchName) {
      getProducts(
        `https://fabstore-server.onrender.com/api/v1/products?fields=offer,name,images,price,colors&${filterBy.toLowerCase()}=${selectedName}`
      );
      setTimeout(() => {
        window.scrollTo({ top: 500 });
      }, 100);
    } else if (selectedName && pricesLessThan && !searchName) {
      getProducts(
        `https://fabstore-server.onrender.com/api/v1/products?fields=offer,name,images,price,discountPrice,colors&${filterBy.toLowerCase()}=${selectedName}&numericFilters=price${pricesLessThan}&pricesGreaterThan=${pricesGreaterThan}`
      );
      setTimeout(() => {
        window.scrollTo({ top: 500 });
      }, 100);
    } else {
      getProducts(
        `https://fabstore-server.onrender.com/api/v1/products?fields=offer,name,images,price,colors&${filterBy.toLowerCase()}=${selectedName}`
      );
      setTimeout(() => {
        window.scrollTo({ top: 500 });
      }, 100);
    }
  }, [selectedName, pricesLessThan, searchName]);

  // STYLES ARE APPLYING FROM (allproducts.scss)

  if (isLoading) {
    return (
      <section className='allProducts'>
        <Spinner />
      </section>
    );
  }

  if (productData.length < 1) {
    return (
      <section className='allProducts'>
        <strong className='allProducts__signText'>No product was found</strong>
      </section>
    );
  }

  return (
    <div className='allProducts__listingWrapper'>
      {productData.slice(0, limit).map((item: any) => {
        return (
          <div key={item.id}>
            <Item item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplayedProducts;
