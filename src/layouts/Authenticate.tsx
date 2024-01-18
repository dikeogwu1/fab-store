import { Link } from "react-router-dom";
import BrandLogo from "../components/BrandLogo";
import Eye from "../assets/Eye";
import { useState } from "react";

const Authenticate = ({ isRegister }: { isRegister: boolean }) => {
  const [isPasswordOpen, setIsPasswordOpen] = useState<boolean>(false);

  const togglePassword = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPasswordOpen(!isPasswordOpen);
  };

  return (
    <div className='auth'>
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
          {isRegister ? (
            <h2 className='auth__tittle'>Register</h2>
          ) : (
            <h2 className='auth__tittle'>Sign in</h2>
          )}
          {/* CHECK IF REGISTERING OR SIGNING IN */}
          {isRegister ? (
            <p className='auth__desc'>
              Already have an account?{" "}
              <Link to='/login' className='auth__link'>
                Sign in
              </Link>
            </p>
          ) : (
            <p className='auth__desc'>
              Don’t have an accout yet?{" "}
              <Link to='/register' className='auth__link'>
                Register
              </Link>
            </p>
          )}
        </div>
        <form className='auth__form'>
          {/* CHECK IF REGISTERING OR SIGNING IN */}
          {isRegister && (
            <>
              <div className='auth__inputBox'>
                <input
                  type='text'
                  placeholder='First name'
                  name='firstName'
                  className='auth__input'
                  autoComplete='off'
                />
              </div>
              <div className='auth__inputBox'>
                <input
                  type='text'
                  placeholder='Last name'
                  name='lastName'
                  className='auth__input'
                  autoComplete='off'
                />
              </div>
              <div className='auth__inputBox'>
                <input
                  type='email'
                  placeholder='Email address'
                  name='Email'
                  className='auth__input'
                  autoComplete='off'
                />
              </div>
            </>
          )}
          <div className='auth__inputBox'>
            <input
              type={isPasswordOpen ? "tel" : "password"}
              placeholder='Password'
              name='password'
              className='auth__input'
              autoComplete='off'
            />
            <button onClick={togglePassword}>
              <Eye />
            </button>
          </div>
          {/* CHECK IF REGISTERING OR SIGNING IN */}
          {isRegister ? (
            <div className='auth__terms'>
              <input
                type='checkbox'
                name='conditions'
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
          ) : (
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
          )}
          <button className='auth__btn'>
            {isRegister ? "Register" : "Sign in"}
          </button>
        </form>
      </section>
    </div>
  );
};

export default Authenticate;
