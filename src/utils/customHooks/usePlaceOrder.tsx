import axios from "axios";
import { getTokenFromLocalStorage } from "../functions/localStorage";
import { storeType } from "../../store";
import { contactInformation } from "../../types/random";
import { useState } from "react";
import { toast } from "react-toastify";
// utils
import { useDispatch, useSelector } from "react-redux";
import {
  newClientSecret,
  setIsLoading,
  setOrderId,
} from "../../features/order";

type urlString = string;

const usePlaceOrder = () => {
  const [clientSecret, setClientSecret] = useState<any>(null);
  const { cart, total, shippingFee } = useSelector(
    (store: storeType) => store.cart
  );
  const dispatch = useDispatch();

  const createItent = async (url: urlString) => {
    setIsLoading(true);
    try {
      const { data } = await axios.post(
        url,
        {
          items: cart,
          total,
          shippingFee,
        },
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
          },
        }
      );
      setIsLoading(false);
      setClientSecret(data.clientSecret);
      // dispatch(setOrderId({ orderId: data.order }));
    } catch (error: any) {
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  };

  const createOrder = async (
    url: urlString,
    contactDetails: contactInformation,
    saveInfo: boolean,
    clientSecret: string
  ) => {
    dispatch(setIsLoading(true));

    try {
      const { data } = await axios.post(
        url,
        {
          items: cart,
          total,
          shippingFee,
          contactDetails,
          saveInfo,
          clientSecret,
        },
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
          },
        }
      );
      dispatch(setIsLoading(false));
      setClientSecret(data.clientSecret);
      dispatch(setOrderId({ orderId: data.orderId }));
      dispatch(newClientSecret({ secret: data.clientSecret }));
    } catch (error: any) {
      toast.error(error.response.data.msg);
      dispatch(setIsLoading(false));
    }
  };

  return { createOrder, createItent, clientSecret };
};

export default usePlaceOrder;
