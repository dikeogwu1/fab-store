import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Eye from "../assets/Eye";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import useLogger from "../utils/customHooks/useLogger";

const initialState = {
  email: "",
  password: "",
};

const LoginLayout = () => {
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);
  const [values, setValues] = useState(initialState);
  const { handleSubmit, isLoading } = useLogger();

  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPasswordOpen(!isPasswordOpen);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  // STYLES ARE APPLYING FROM (register.scss)
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
          <h2 className='auth__tittle'>Sign in</h2>
          <p className='auth__desc'>
            Don’t have an accout yet?{" "}
            <Link to='/register' className='auth__link'>
              Register
            </Link>
          </p>
        </div>
        <form className='auth__form'>
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
          <div className='auth__terms auth__terms--forgotPass'>
            <div className='auth__remember'>
              <input
                type='checkbox'
                name='conditions'
                id='conditions'
                className='auth__checkbox'
              />
              <label htmlFor='conditions' className='auth__prompt'>
                Remember me
              </label>
            </div>
            <Link to='/forgot-password' className='auth__conditions'>
              Forgot password?
            </Link>
          </div>
          <button
            className='auth__btn'
            disabled={isLoading}
            onClick={(e) =>
              handleSubmit(
                e,
                values,
                "https://fabstore-server.onrender.com/api/v1/auth/login",
                true
              )
            }
          >
            Sign in
          </button>
        </form>
      </section>
    </div>
  );
};

export default LoginLayout;
