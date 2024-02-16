import axios from "axios";
import { useState, useEffect } from "react";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
import Spinner from "./Spinner";
import { truncateText } from "../utils/functions/truncate";
import { addCommas } from "../utils/functions/addCommas";

const Orders = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [order, setOder] = useState<any>([]);

  const getOrder = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
        },
      });
      setOder(data.order);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder(
      `https://fabstore-server.onrender.com/api/v1/orders/showAllMyOrders`
    );
  }, []);

  if (isLoading) {
    return (
      <section className='orders'>
        <h3 className='orders__tittle'>Orders History</h3>
        <div className='orders__container'>
          <div className='orders__wrapper  orders__wrapper--lg'>
            {/* header for large screen */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Number ID
              </strong>
            </header>
            {/* Order date */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Dates
              </strong>
            </header>
            {/* Order status */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Status
              </strong>
            </header>
            {/* Order price */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Price
              </strong>
            </header>
          </div>
          <Spinner />
        </div>
      </section>
    );
  }

  if (order.length < 1) {
    return (
      <section className='orders'>
        <h3 className='orders__tittle'>Orders History</h3>
        <div className='orders__container'>
          <div className='orders__wrapper  orders__wrapper--lg'>
            {/* header for large screen */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Number ID
              </strong>
            </header>
            {/* Order date */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Dates
              </strong>
            </header>
            {/* Order status */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Status
              </strong>
            </header>
            {/* Order price */}
            <header className='orders__list'>
              <strong className='orders__name orders__name--header'>
                Price
              </strong>
            </header>
          </div>
          <h4 className='orders__empty'>You have no order history yet</h4>
        </div>
      </section>
    );
  }

  return (
    <section className='orders'>
      <h3 className='orders__tittle'>Orders History</h3>
      <div className='orders__container'>
        <div className='orders__wrapper  orders__wrapper--lg'>
          {/* header for large screen */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>
              Number ID
            </strong>
          </header>
          {/* Order date */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>Dates</strong>
          </header>
          {/* Order status */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>
              Status
            </strong>
          </header>
          {/* Order price */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>Price</strong>
          </header>
        </div>
        {/* First order */}
        {order.map((item: any) => {
          const { _id, date, status, total } = item;
          return (
            <div className='orders__wrapper' key={_id}>
              {/* Order ID */}
              <ul className='orders__list'>
                <li className='orders__name'>Number ID</li>
                <li className='orders__name orders__name--value'>
                  #{truncateText(_id, 8)}
                </li>
              </ul>
              {/* Order date */}
              <ul className='orders__list'>
                <li className='orders__name'>Dates</li>
                <li className='orders__name orders__name--value'>{date}</li>
              </ul>
              {/* Order status */}
              <ul className='orders__list'>
                <li className='orders__name'>Status</li>
                <li className='orders__name orders__name--value'>{status}</li>
              </ul>
              {/* Order price */}
              <ul className='orders__list'>
                <li className='orders__name'>Price</li>
                <li className='orders__name orders__name--value'>
                  ${addCommas(total.toFixed(2).toString())}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Orders;
