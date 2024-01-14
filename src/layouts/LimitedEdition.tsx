import CountDownTimer from "../components/CountDownTimer";

const LimitedEdition = () => {
  return (
    <section className='limitedEdition'>
      <div className='limitedEdition__imgBox'>
        <img
          src='https://res.cloudinary.com/dikeogwu1/image/upload/v1705233295/Fabstore%20e-commerce/Limited_edition_ikntgr.png'
          alt='winter coat'
          className='limitedEdition__img'
        />
        <div className='limitedEdition__imgCover'></div>
      </div>
      <div className='limitedEdition__desc'>
        <h4 className='limitedEdition__tittle'>Limited edition</h4>
        <strong className='limitedEdition__topic'>Hurry up! 40% OFF</strong>
        <p className='limitedEdition__prompt'>Hurry up!!! Winter is coming!</p>
        <div className='limitedEdition__timer'>
          <CountDownTimer />
        </div>
        <button className='limitedEdition__btn'>Shop now</button>
      </div>
    </section>
  );
};

export default LimitedEdition;
