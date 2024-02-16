import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Eye from "../assets/Eye";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import useLogger from "../utils/customHooks/useLogger";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const RegisterLayout = () => {
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);
  const [values, setValues] = useState(initialState);
  const [isPolicy, setIsPolicy] = useState<boolean>(false);
  const { handleSubmit, isLoading } = useLogger();

  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPasswordOpen(!isPasswordOpen);
  };

  const handleCheckedPolicy = (e: React.ChangeEvent<HTMLInputElement>) => {
    if ((e.currentTarget.checked = true)) {
      setIsPolicy(true);
    } else {
      setIsPolicy(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <div className='auth'>
      <ToastContainer />
      <section className='auth__poster'>
        <div className='auth__logo'>
          <BrandLogo />
        </div>
        <div className='auth__imgBox'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1705077208/Fabstore%20e-commerce/Paste_image_9_edited_zz3fva.png'
            alt='fashion poster'
          />
        </div>
      </section>

      <section className='auth__feed'>
        <div className='auth__header'>
          {/* CHECK IF REGISTERING OR SIGNING IN */}
          <h2 className='auth__tittle'>Register</h2>
          <p className='auth__desc'>
            Already have an account?{" "}
            <Link to='/login' className='auth__link'>
              Sign in
            </Link>{" "}
            or{" "}
            <button
              className='auth__demo'
              disabled={isLoading}
              onClick={(e) =>
                handleSubmit(
                  e,
                  { values: { testUser: "demoApp" } },
                  "https://fabstore-server.onrender.com/api/v1/auth/loginTestUser",
                  true
                )
              }
            >
              Test the App
            </button>
          </p>
        </div>
        <form className='auth__form'>
          {/* CHECK IF REGISTERING OR SIGNING IN */}
          <div className='auth__inputBox'>
            <input
              type='text'
              placeholder='First name'
              name='firstName'
              value={values.firstName}
              onChange={handleChange}
              className='auth__input'
              autoComplete='off'
            />
          </div>
          <div className='auth__inputBox'>
            <input
              type='text'
              placeholder='Last name'
              name='lastName'
              value={values.lastName}
              onChange={handleChange}
              className='auth__input'
              autoComplete='off'
            />
          </div>
          <div className='auth__inputBox'>
            <input
              type='email'
              placeholder='Email address'
              name='email'
              value={values.email}
              onChange={handleChange}
              className='auth__input'
              autoComplete='off'
            />
          </div>
          <div className='auth__inputBox'>
            <input
              type={isPasswordOpen ? "tel" : "password"}
              placeholder='Password'
              name='password'
              value={values.password}
              onChange={handleChange}
              className='auth__input'
              autoComplete='off'
            />
            <button onClick={togglePassword}>
              <Eye />
            </button>
          </div>
          <div className='auth__terms'>
            <input
              type='checkbox'
              name='conditions'
              onChange={handleCheckedPolicy}
              id='conditions'
              className='auth__checkbox'
            />
            <label htmlFor='conditions' className='auth__prompt'>
              I agree with{" "}
              <Link to='/privacy' className='auth__conditions'>
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to='/terms' className='auth__conditions'>
                Terms of Use
              </Link>
            </label>
          </div>
          <button
            className='auth__btn'
            disabled={isLoading}
            onClick={(e) =>
              handleSubmit(
                e,
                values,
                "https://fabstore-server.onrender.com/api/v1/auth/register",
                isPolicy
              )
            }
          >
            Register
          </button>
        </form>
      </section>
    </div>
  );
};

export default RegisterLayout;
