import Facebook from "../assets/Facebook";
import Instagram from "../assets/Instagram";
import Youtube from "../assets/Youtube";
import { paymentCardData } from "../utils/local/cardsData";
import BrandLogo from "./BrandLogo";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__navBox'>
          <header className='footer__header'>
            <BrandLogo />
            <p className='footer__desc'>
              More than just fashion. It’s a lifestyle.
            </p>
            <div className='footer__socials'>
              <Instagram color={true} />
              <Facebook color={true} />
              <Youtube color={true} />
            </div>
          </header>

          <nav className='footer__nav'>
            <ul className='footer__list'>
              <strong className='footer__topic'>Page</strong>
              <li className='footer__item'>Home</li>
              <li className='footer__item'>Shop</li>
              <li className='footer__item'>Product</li>
              <li className='footer__item'>Articles</li>
              <li className='footer__item'>Contact Us</li>
            </ul>
            <ul className='footer__list'>
              <strong className='footer__topic'>Info</strong>
              <li className='footer__item'>Shipping Policy</li>
              <li className='footer__item'>Return & Refund</li>
              <li className='footer__item'>Support</li>
              <li className='footer__item'>FAQs</li>
            </ul>
            <ul className='footer__list'>
              <strong className='footer__topic'>Office</strong>
              <li className='footer__item'>43111 Hai Trieu street,</li>
              <li className='footer__item'>District 1, HCMC</li>
              <li className='footer__item'>Vietnam</li>
              <li className='footer__item'>84-756-3237</li>
            </ul>
          </nav>
        </div>
        <div className='footer__bottom'>
          <div className='footer__cards'>
            {paymentCardData.map((card) => {
              const { id, img } = card;
              return (
                <div className='footer__cardImg' key={id}>
                  <img src={img} alt='payment card' />
                </div>
              );
            })}
          </div>
          <div className='footer__writeup'>
            <div className='footer__policy'>
              <strong className='footer__terms'>Privacy Policy</strong>
              <strong className='footer__terms'>Terms of Use</strong>
            </div>
            <p className='footer__copyright'>
              Copyright © {new Date().getFullYear()} FAB'store. All rights
              reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
