import Edit from "../assets/Edit";

const Address = () => {
  return (
    <section className='address'>
      <h3 className='address__tittle'>Address</h3>
      <div className='address__container'>
        {/* Billing address */}
        <div className='address__item'>
          <header className='address__header'>
            <strong className='address__name'>Billing Address</strong>
            <button className='address__editBtn'>
              <Edit /> Edit
            </button>
          </header>
          <div className='address__details'>
            <strong className='address__detail'>Sofia Havertz</strong>
            <strong className='address__detail'>(+1) 234 567 890</strong>
            <strong className='address__detail'>
              345 Long Island, NewYork, United States
            </strong>
          </div>
        </div>
        {/* Shipping address */}
        <div className='address__item'>
          <header className='address__header'>
            <strong className='address__name'>Shipping Address</strong>
            <button className='address__editBtn'>
              <Edit /> Edit
            </button>
          </header>
          <div className='address__details'>
            <strong className='address__detail'>Sofia Havertz</strong>
            <strong className='address__detail'>(+1) 234 567 890</strong>
            <strong className='address__detail'>
              345 Long Island, NewYork, United States
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;
