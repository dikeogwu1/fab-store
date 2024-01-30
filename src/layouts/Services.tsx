import CallLight from "../assets/CallLight";
import Lock from "../assets/Lock";
import TicketLight from "../assets/TicketLight";
import Truck from "../assets/Truck";

const Services = () => {
  return (
    <div className='services'>
      {/* Free Shipping */}
      <div className='services__item'>
        <div className='services__icon'>
          <Truck />
        </div>
        <div className='services__desc'>
          <h4 className='services__tittle'>Free Shipping</h4>
          <p className='services__text'>Order above $200</p>
        </div>
      </div>

      {/* Money-back */}
      <div className='services__item'>
        <div className='services__icon'>
          <TicketLight />
        </div>
        <div className='services__desc'>
          <h4 className='services__tittle'>Money-back</h4>
          <p className='services__text'>30 days guarantee</p>
        </div>
      </div>

      {/* Secure Payments */}
      <div className='services__item'>
        <div className='services__icon'>
          <Lock />
        </div>
        <div className='services__desc'>
          <h4 className='services__tittle'>Secure Payments</h4>
          <p className='services__text'>Secured by Stripe</p>
        </div>
      </div>

      {/* 24/7 Support */}
      <div className='services__item'>
        <div className='services__icon'>
          <CallLight />
        </div>
        <div className='services__desc'>
          <h4 className='services__tittle'>24/7 Support</h4>
          <p className='services__text'>Phone and Email support</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
