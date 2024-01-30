import { Link } from "react-router-dom";
import SubNabar from "../components/SubNabar";
import ArrowRight from "../assets/ArrowRight";
import House from "../assets/House";
import PhoneCall from "../assets/PhoneCall";
import EmailEnvelop from "../assets/EmailEnvelop";

const ContactLayout = () => {
  return (
    <section className='contact'>
      <div className='contact__subNav'>
        <SubNabar name='Home' url='/home' active={false} />
        <SubNabar name='Contact' url='/contact' active={true} />
      </div>

      {/* Introduction */}
      <div className='contact__descBox'>
        <h3 className='contact__tittle'>
          We believe in sustainable style. We’re passionate about classic
          fashion.
        </h3>
        <p className='contact__desc'>
          our garments seamlessly integrate into any wardrobe, transcending
          fleeting trends. From impeccably tailored blazers to flowing dresses,
          our collection captivates with its understated allure. Embrace pieces
          that stand the test of time, embodying tradition while embracing the
          spirit of the present.
        </p>
      </div>
      {/* about us */}
      <div className='contact__about'>
        <div className='contact__imgBox'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1706606877/Fabstore%20e-commerce/5875301250_1_1_1_jldcvs.jpg'
            alt='Brand poster'
          />
        </div>
        <div className='contact__aboutText'>
          <h4 className='contact__topic'>About Us</h4>
          <p className='contact__aboutDesc'>
            Fab'store is a headphones & fashion store based in HCMC, Vietnam.
            Est since 2019. Our customer service is always prepared to support
            you 24/7
          </p>
          <Link to='/shop' className='contact__link'>
            Shop Now <ArrowRight />
          </Link>
        </div>
      </div>

      {/* Contact Informations */}
      <div className='contact__box'>
        <h4 className='contact__topic contact__topic--center'>Contact Us</h4>
        {/* Info */}
        <div className='contact__info'>
          <div className='contact__card'>
            <House />
            <h5 className='contact__infoTittle'>Address</h5>
            <p className='contact__infoText'>
              234 Hai Trieu, Ho Chi Minh City, Viet Nam
            </p>
          </div>
          {/* Info */}
          <div className='contact__card'>
            <PhoneCall />
            <h5 className='contact__infoTittle'>Contact Us</h5>
            <p className='contact__infoText'>+84 234 567 890</p>
          </div>
          {/* Info */}
          <div className='contact__card'>
            <EmailEnvelop />
            <h5 className='contact__infoTittle'>Email</h5>
            <p className='contact__infoText'>hello@fabstore.com</p>
          </div>
        </div>
      </div>

      {/* Get in touch */}
      <div className='contact__formBox'>
        <div className='contact__map'>
          <img
            src='https://res.cloudinary.com/dikeogwu1/image/upload/v1706613890/Fabstore%20e-commerce/Address_map_wsfx1s.png'
            alt='Map'
          />
          <div className='contact__mapIcon'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1706614512/Fabstore%20e-commerce/location_kqtbre.svg'
              alt='Location'
            />
          </div>
        </div>
        <form className='contact__form'>
          {/* full name */}
          <div className='contact__inputBox'>
            <label htmlFor='fullName' className='contact__label'>
              Full Name
            </label>
            <input
              type='text'
              placeholder='Your Name'
              id='fullName'
              autoComplete='off'
              className='contact__input'
            />
          </div>
          {/* email address */}
          <div className='contact__inputBox'>
            <label htmlFor='email' className='contact__label'>
              Email address
            </label>
            <input
              type='email'
              id='email'
              autoComplete='off'
              placeholder='Your Email'
              className='contact__input'
            />
          </div>
          {/* message */}
          <div className='contact__inputBox'>
            <label htmlFor='message' className='contact__label'>
              message
            </label>
            <textarea
              id='message'
              placeholder='Your message'
              className='contact__input contact__input--textarea'
            />

            <button className='contact__submit'>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactLayout;
