import React, { useEffect, useState } from "react";
import PaymentCard from "../assets/PaymentCard";
import MiniCartItems from "./MiniCartItems";
import SelectCountry from "./SelectCountry";
// utils
import { toast, ToastContainer } from "react-toastify";
import usePlaceOrder from "../utils/customHooks/usePlaceOrder";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";

// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";
import Card from "./Stripe";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  streetAddress: "",
  city: "",
  state: "",
  zipCode: "",
  cardNumber: 123123123123,
  cardExpiration: 6 / 25,
  cardCVC: 373,
};

const CheckoutDetails = () => {
  const [saveInfo, setSaveInfo] = useState<boolean>(false);
  const [values, setValues] = useState(initialState);
  const [submiting, setSubmiting] = useState<boolean>(false);
  const [stripePromise, setStripePromise] = useState<any>(null);
  const { createOrder, createItent, clientSecret } = usePlaceOrder();
  const { isLoggedIn } = useSelector((store: storeType) => store.user);
  const { isloading } = useSelector((store: storeType) => store.order);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const getPublicKey = async () => {
    try {
      const { data } = await axios.get(
        "https://fabstore-server.onrender.com/api/v1/orders/config"
      );
      setStripePromise(loadStripe(data.publicKey));
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPublicKey();
  }, []);

  useEffect(() => {
    createItent("https://fabstore-server.onrender.com/api/v1/orders/intent");
  }, []);

  const contactDetails = {
    firstName: values.firstName,
    lastName: values.firstName,
    phoneNumber: values.phoneNumber,
    streetAddress: values.streetAddress,
    city: values.city,
    state: values.state,
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast.error("You have to log in before placing your order");
      return;
    }

    createItent("https://fabstore-server.onrender.com/api/v1/orders/intent");

    if (
      !values.firstName ||
      !values.lastName ||
      !values.email ||
      !values.phoneNumber ||
      !values.streetAddress ||
      !values.city ||
      !values.state ||
      !values.zipCode ||
      !values.cardNumber ||
      !values.cardExpiration ||
      !values.cardCVC
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    createOrder(
      "https://fabstore-server.onrender.com/api/v1/orders",
      contactDetails,
      saveInfo,
      clientSecret
    );

    setSubmiting(true);
  };

  return (
    <div className='details'>
      <form className='details__form'>
        <ToastContainer />
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
                    value={values.firstName}
                    onChange={handleChange}
                    autoComplete='off'
                    placeholder='First name'
                    className={`details__input ${
                      !values.firstName && submiting && "details__input--error"
                    }`}
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
                    value={values.lastName}
                    onChange={handleChange}
                    id='lastName'
                    autoComplete='off'
                    placeholder='Last name'
                    className={`details__input ${
                      !values.lastName && submiting && "details__input--error"
                    }`}
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
                  value={values.phoneNumber}
                  onChange={handleChange}
                  id='phoneNumber'
                  autoComplete='off'
                  placeholder='Phone number'
                  className={`details__input ${
                    !values.phoneNumber && submiting && "details__input--error"
                  }`}
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
                  value={values.email}
                  onChange={handleChange}
                  id='email'
                  autoComplete='off'
                  placeholder='Your email'
                  className={`details__input ${
                    !values.email && submiting && "details__input--error"
                  }`}
                />
              </div>
            </section>
            {/*Shipping Info  */}
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
                  value={values.streetAddress}
                  onChange={handleChange}
                  id='streetAddress'
                  autoComplete='off'
                  placeholder='Street Address'
                  className={`details__input ${
                    !values.streetAddress &&
                    submiting &&
                    "details__input--error"
                  }`}
                />
              </div>
              {/* Country */}
              <SelectCountry />
              {/* Town / city */}
              <div className='details__inputBox'>
                <label htmlFor='town' className='details__label'>
                  Town / City
                </label>
                <input
                  type='text'
                  name='city'
                  value={values.city}
                  onChange={handleChange}
                  id='town'
                  autoComplete='off'
                  placeholder='Town / City'
                  className={`details__input ${
                    !values.city && submiting && "details__input--error"
                  }`}
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
                    value={values.state}
                    onChange={handleChange}
                    id='state'
                    autoComplete='off'
                    placeholder='State'
                    className={`details__input ${
                      !values.state && submiting && "details__input--error"
                    }`}
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
                    value={values.zipCode}
                    onChange={handleChange}
                    id='zipCode'
                    autoComplete='off'
                    placeholder='Zip Code'
                    className={`details__input ${
                      !values.zipCode && submiting && "details__input--error"
                    }`}
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
              <strong className='details__label details__label--test'>
                <span>Test card number: 4242 4242 4242 4242</span>
                <span className='details__testCvc'>Test card cvc: 424</span>
              </strong>

              {/* divider */}
              <div className='details__divider'></div>
              {/* Card number */}
              {stripePromise && clientSecret && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <Card submiting={submiting} />
                </Elements>
              )}
            </section>
          </div>
        </div>
        <button
          className='details__submit'
          disabled={isloading}
          onClick={handleSubmit}
        >
          {isloading ? "Proccessing" : "Place Order"}
        </button>
      </form>
      <div className='details__miniCart'>
        <MiniCartItems mini={false} />
      </div>
    </div>
  );
};

export default CheckoutDetails;
