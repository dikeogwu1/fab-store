import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
import { addCommas } from "../utils/functions/addCommas";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import Spinner from "./Spinner";
import { setActiveTap } from "../features/profileTap";

const OrderComplete = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [order, setOder] = useState<any>({});
  const { orderId } = useSelector((store: storeType) => store.order);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getOrder = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.patch(
        url,
        {},
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
          },
        }
      );
      setOder(data.order);
      setIsLoading(false);
      console.log(data);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (orderId) {
      getOrder(`https://fabstore-server.onrender.com/api/v1/orders/${orderId}`);
    }
  }, [orderId]);

  if (isLoading) {
    return (
      <div className='complete'>
        <div className='complete__container'>
          <strong className='complete__comp'>Thank you! 🎉</strong>
          <h2 className='complete__tittle'>Your order has been received</h2>
          <Spinner />
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className='complete'>
        <div className='complete__container'>
          <strong className='complete__comp'>Thank you! 🎉</strong>
          <h2 className='complete__tittle'>Your order has been received</h2>
          <h4 className='complete__empty'>Unable to retrieve order details</h4>
        </div>
      </div>
    );
  }

  return (
    <div className='complete'>
      <div className='complete__container'>
        <strong className='complete__comp'>Thank you! 🎉</strong>
        <h2 className='complete__tittle'>Your order has been received</h2>
        <div className='complete__item'>
          {order.orderItems &&
            order.orderItems.map((item: any) => {
              const { _id, amount, image, name } = item;
              return (
                <div className='complete__imgBox' key={_id}>
                  <sup className='complete__super'>{amount}</sup>
                  <img src={image} alt={name} />
                </div>
              );
            })}
        </div>
        <div className='complete__descBox'>
          <div className='complete__desc'>
            <p className='complete__text'>Order Status:</p>
            <strong className='complete__value'>{order.status}</strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Date:</p>
            <strong className='complete__value'>{order.date}</strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Total:</p>
            <strong className='complete__value'>
              ${order.total && addCommas(order.total.toFixed(2).toString())}
            </strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Payment method:</p>
            <strong className='complete__value'>Credit Card</strong>
          </div>
        </div>
        <button
          className='complete__btn'
          onClick={() => {
            dispatch(setActiveTap(3));
            navigate("/profile");
          }}
        >
          Purchase history
        </button>
      </div>
    </div>
  );
};

export default OrderComplete;
