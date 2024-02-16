import Item from "./Item";
import useProduct from "../utils/customHooks/useProduct";
import { useEffect } from "react";
import Spinner from "./Spinner";
import { ToastContainer } from "react-toastify";

const FeaturedItem = () => {
  const { isLoading, productData, getProducts } = useProduct();

  useEffect(() => {
    getProducts(
      `https://fabstore-server.onrender.com/api/v1/products?featured=true&sort=z&fields=offer,name,images,price,discountPrice,colors`
    );
  }, []);

  if (isLoading) {
    return (
      <section className='featuredItem'>
        <Spinner />
      </section>
    );
  }

  return (
    <section className='featuredItem'>
      <ToastContainer />
      {productData.map((item: any) => {
        return (
          <div className='featuredItem__wrapper' key={item._id}>
            <div className='featuredItem__item'>
              <Item item={item} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FeaturedItem;
