import axios from "axios";
import { useRef, useState } from "react";
// utils
import { ToastContainer, toast } from "react-toastify";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
// redux
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../features/user";

const initialState = {
  firstName: "",
  lastName: "",
  displayName: "",
  email: "",
  oldPassword: "",
  newPassword: "",
  repeatPassword: "",
};

const Account = () => {
  const [values, setValues] = useState(initialState);
  const repeatPasswordRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const disptach = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    repeatPasswordRef.current?.classList.remove("account__input--error");
  };

  const updateCridentials = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (
      !values.firstName ||
      !values.firstName ||
      !values.displayName ||
      !values.email ||
      !values.oldPassword ||
      !values.newPassword ||
      !values.repeatPassword
    ) {
      toast.error("Please fill out all fields");
      return;
    }

    if (values.newPassword !== values.repeatPassword) {
      repeatPasswordRef.current?.classList.add("account__input--error");
      return;
    }

    setIsLoading(true);

    try {
      const { data } = await axios.patch(
        "https://fabstore-server.onrender.com/api/v1/users/updateUser",
        { ...values },
        {
          headers: {
            Authorization: `Bearer ${getTokenFromLocalStorage()?.token}`,
          },
        }
      );
      setIsLoading(false);
      disptach(
        setCurrentUser({
          firstName: data.user.firstName,
          lastName: data.user.lastName,
          displayName: data.user.displayName || "",
        })
      );
      window.scrollTo({ top: 0 });
    } catch (error: any) {
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  };

  return (
    <section className='account'>
      <ToastContainer />
      <h3 className='account__tittle'>Account Details</h3>
      <form className='account__form'>
        {/* First name */}
        <div className='account__inputBox'>
          <label htmlFor='firstName' className='account__label'>
            First name *
          </label>
          <input
            type='text'
            name='firstName'
            autoComplete='off'
            id='firstName'
            value={values.firstName}
            onChange={handleChange}
            placeholder='First name'
            className='account__input'
          />
        </div>
        {/* Last name */}
        <div className='account__inputBox'>
          <label htmlFor='lastName' className='account__label'>
            Last name *
          </label>
          <input
            type='text'
            name='lastName'
            autoComplete='off'
            value={values.lastName}
            onChange={handleChange}
            id='lastName'
            placeholder='Last name'
            className='account__input'
          />
        </div>
        {/* Display name */}
        <div className='account__inputBox'>
          <label htmlFor='displayName' className='account__label'>
            Display name *
          </label>
          <input
            type='text'
            name='displayName'
            autoComplete='off'
            value={values.displayName}
            onChange={handleChange}
            id='displayName'
            placeholder='Display name'
            className='account__input'
          />
          <p className='account__desc'>
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        {/* Email name */}
        <div className='account__inputBox'>
          <label htmlFor='email' className='account__label'>
            Email *
          </label>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='off'
            value={values.email}
            onChange={handleChange}
            placeholder='Email'
            className='account__input'
          />
        </div>
        {/* Change password */}
        <h4 className='account__topic'>Password</h4>
        {/* Old password */}
        <div className='account__inputBox'>
          <label htmlFor='oldPassword' className='account__label'>
            Old password *
          </label>
          <input
            type='password'
            name='oldPassword'
            id='oldPassword'
            autoComplete='off'
            value={values.oldPassword}
            onChange={handleChange}
            placeholder='Old password'
            className='account__input'
          />
        </div>
        {/* New password */}
        <div className='account__inputBox'>
          <label htmlFor='newPassword' className='account__label'>
            New password *
          </label>
          <input
            type='password'
            name='newPassword'
            id='newPassword'
            autoComplete='off'
            value={values.newPassword}
            onChange={handleChange}
            placeholder='New password'
            className='account__input'
          />
        </div>
        {/* Repeat new password */}
        <div className='account__inputBox'>
          <label htmlFor='repeatPassword' className='account__label'>
            Repeat new password *
          </label>
          <input
            type='password'
            name='repeatPassword'
            id='repeatPassword'
            autoComplete='off'
            value={values.repeatPassword}
            onChange={handleChange}
            ref={repeatPasswordRef}
            placeholder='Repeat new password'
            className='account__input'
          />
        </div>

        <button
          className='account__btn'
          disabled={isLoading}
          onClick={updateCridentials}
        >
          Save changes
        </button>
      </form>
    </section>
  );
};

export default Account;
