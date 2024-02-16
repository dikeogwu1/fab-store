import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { addTokenToLocalStorage } from "../../utils/functions/localStorage";
// redux
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/user";

const useLogger = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    values: any,
    url: string,
    policy: boolean
  ) => {
    e.preventDefault();

    if (!policy) {
      toast.error("terms and conditions is not checked");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.post(url, { ...values });
      addTokenToLocalStorage(data);
      setIsLoading(false);
      dispatch(userLogin());
      navigate("/profile");
    } catch (error: any) {
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return { isLoading, handleSubmit };
};

export default useLogger;
