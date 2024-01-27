import React, { useState } from "react";
import PaymentCard from "../assets/PaymentCard";
import MiniCartItems from "./MiniCartItems";

const CheckoutDetails = () => {
  const [saveInfo, setSaveInfo] = useState<boolean>(false);

  return (
    <div className='details'>
      <form className='details__form'>
        <div className='details__container'>
          <div className='details__formWrapper'>
            {/* Contact Infomations */}
            <section className='details__section'>
              <h2 className='details__tittle'>Contact Infomation</h2>
              {/* two column */}
              <div className='details__twoColumn'>
                {/* First Name */}
                <div className='details__inputBox'>
                  <label htmlFor='firstName' className='details__label'>
                    First name
                  </label>
                  <input
                    type='text'
                    name='firstName'
                    id='firstName'
                    autoComplete='off'
                    placeholder='First name'
                    className='details__input'
                  />
                </div>
                {/* Last Name */}
                <div className='details__inputBox'>
                  <label htmlFor='lastName' className='details__label'>
                    Last name
                  </label>
                  <input
                    type='text'
                    name='lastName'
                    id='lastName'
                    autoComplete='off'
                    placeholder='Last name'
                    className='details__input'
                  />
                </div>
              </div>
              {/* Phone number */}
              <div className='details__inputBox'>
                <label htmlFor='phoneNumber' className='details__label'>
                  Phone number
                </label>
                <input
                  type='tel'
                  name='phoneNumber'
                  id='phoneNumber'
                  autoComplete='off'
                  placeholder='Phone number'
                  className='details__input'
                />
              </div>
              {/* Email address */}
              <div className='details__inputBox'>
                <label htmlFor='email' className='details__label'>
                  Email address
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  placeholder='Your email'
                  className='details__input'
                />
              </div>
            </section>
            {/*Shipping Address  */}
            <section className='details__section'>
              <h2 className='details__tittle'>Shipping Address</h2>
              {/* Street address */}
              <div className='details__inputBox'>
                <label htmlFor='streetAddress' className='details__label'>
                  Street Address
                </label>
                <input
                  type='text'
                  name='streetAddress'
                  id='streetAddress'
                  autoComplete='off'
                  placeholder='Street Address'
                  className='details__input'
                />
              </div>
              {/* Country */}
              <div className='details__inputBox'>
                <label htmlFor='country' className='details__label'>
                  Country
                </label>
                <select className='details__select' name='country'>
                  <option className='details__label'>
                    Select your country
                  </option>
                </select>
              </div>
              {/* Town / city */}
              <div className='details__inputBox'>
                <label htmlFor='town' className='details__label'>
                  Town / City
                </label>
                <input
                  type='text'
                  name='town'
                  id='town'
                  autoComplete='off'
                  placeholder='Town / City'
                  className='details__input'
                />
              </div>
              {/* two column */}
              <div className='details__twoColumn'>
                {/* State */}
                <div className='details__inputBox'>
                  <label htmlFor='state' className='details__label'>
                    State
                  </label>
                  <input
                    type='text'
                    name='state'
                    id='state'
                    autoComplete='off'
                    placeholder='State'
                    className='details__input'
                  />
                </div>
                {/* Zip code */}
                <div className='details__inputBox'>
                  <label htmlFor='zipCode' className='details__label'>
                    Zip Code
                  </label>
                  <input
                    type='number'
                    name='zipCode'
                    id='zipCode'
                    autoComplete='off'
                    placeholder='Zip Code'
                    className='details__input'
                  />
                </div>
              </div>
              {/* Save information for later use */}
              <button
                className={`details__saveInfo details__saveInfo--${
                  saveInfo && "active"
                }`}
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  e.preventDefault();
                  setSaveInfo(!saveInfo);
                }}
              >
                Save this information for later use
              </button>
            </section>
            {/*Card details  */}
            <section className='details__section'>
              <h2 className='details__tittle'>Payment method</h2>
              {/* credit card */}
              <div className='details__inputBox details__inputBox--card  details__inputBox--active'>
                <div className='details__input details__input--activePay'>
                  Pay by Card Credit
                </div>
                <span className='details__card'>
                  <PaymentCard />
                </span>
              </div>
              {/* Paypal */}
              <div className='details__inputBox details__inputBox--card'>
                <div className='details__input details__input--paypal'>
                  Paypal
                </div>
              </div>
              {/* divider */}
              <div className='details__divider'></div>
              {/* Card number */}
              <div className='details__inputBox'>
                <label htmlFor='cardNumber' className='details__label'>
                  Card Number
                </label>
                <input
                  type='number'
                  name='cardNumber'
                  id='cardNumber'
                  autoComplete='off'
                  placeholder='1234 1234 1234'
                  className='details__input'
                />
              </div>
              {/* two column */}
              <div className='details__twoColumn'>
                {/* Expiration */}
                <div className='details__inputBox'>
                  <label htmlFor='expiration' className='details__label'>
                    Expiration date
                  </label>
                  <input
                    type='number'
                    name='expiration'
                    id='expiration'
                    autoComplete='off'
                    placeholder='MM/YY'
                    className='details__input'
                  />
                </div>
                {/* Card cvc */}
                <div className='details__inputBox'>
                  <label htmlFor='cvc' className='details__label'>
                    CVC
                  </label>
                  <input
                    type='number'
                    name='cvc'
                    id='cvc'
                    autoComplete='off'
                    placeholder='CVC code'
                    className='details__input'
                  />
                </div>
              </div>
            </section>
          </div>
          <div className='details__miniCart'>
            <MiniCartItems mini={false} />
          </div>
        </div>
        <button className='details__submit'>Place Order</button>
      </form>
    </div>
  );
};

export default CheckoutDetails;
