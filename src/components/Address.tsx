import Edit from "../assets/Edit";
import axios from "axios";
import { useState, useEffect } from "react";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
import { truncateText } from "../utils/functions/truncate";

const Address = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<any>([]);

  const getOrder = async (url: string) => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
        },
      });
      setAddress(data.address);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getOrder(
      `https://fabstore-server.onrender.com/api/v1/address/showAllMyAddress`
    );
  }, []);

  return (
    <section className='address'>
      <h3 className='address__tittle'>Address</h3>
      <div className='address__container'>
        {/* Billing address */}
        <div className='address__item'>
          <header className='address__header'>
            <strong className='address__name'>Billing Address</strong>
            <button className='address__editBtn'>
              <Edit /> Edit
            </button>
          </header>
          <address className='address__details'>
            <strong className='address__detail'>Test User</strong>
            <strong className='address__detail'>(+1) 234 567 890</strong>
            <strong className='address__detail'>
              345 Long Island, NewYork, United States
            </strong>
          </address>
        </div>
        {/* Shipping address */}
        {address.map((item: any) => {
          const {
            _id,
            firstName,
            lastName,
            phoneNumber,
            streetAddress,
            city,
            state,
          } = item;
          return (
            <div className='address__item' key={_id}>
              <header className='address__header'>
                <strong className='address__name'>Shipping Address</strong>
                {!isLoading && (
                  <button className='address__editBtn'>
                    <Edit /> Edit
                  </button>
                )}
              </header>
              <div className='address__details'>
                <strong className='address__detail'>
                  {firstName} {lastName}
                </strong>
                <strong className='address__detail'>{phoneNumber}</strong>
                <strong className='address__detail'>
                  {truncateText(streetAddress, 15)}, {truncateText(city, 5)},{" "}
                  {truncateText(state, 5)} State.
                </strong>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Address;
