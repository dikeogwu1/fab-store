import Email from "../assets/Email";

const NewsLetter = () => {
  return (
    <section className='newsletter'>
      <div className='newsletter_header'>
        <h2 className='newsletter__tittle'>Join Our Newsletter</h2>
        <p className='newsletter__desc'>
          Sign up for deals, new products and promotions
        </p>
      </div>
      <form className='newsletter__form'>
        <div className='newsletter__inputBox'>
          <label htmlFor='email' className='newsletter__label'>
            <Email />
          </label>
          <input
            type='email'
            placeholder='Email Address'
            name='Newsletter'
            id='email'
            autoComplete='off'
            className='newsletter__input'
          />
        </div>
        <button className='newsletter__btn'>Signup</button>
      </form>
    </section>
  );
};

export default NewsLetter;
