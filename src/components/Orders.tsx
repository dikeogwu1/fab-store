const Orders = () => {
  return (
    <section className='orders'>
      <h3 className='orders__tittle'>Orders History</h3>
      <div className='orders__container'>
        <div className='orders__wrapper  orders__wrapper--lg'>
          {/* header for large screen */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>
              Number ID
            </strong>
          </header>
          {/* Order date */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>Dates</strong>
          </header>
          {/* Order status */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>
              Status
            </strong>
          </header>
          {/* Order price */}
          <header className='orders__list'>
            <strong className='orders__name orders__name--header'>Price</strong>
          </header>
        </div>
        {/* First order */}
        <div className='orders__wrapper'>
          {/* Order ID */}
          <ul className='orders__list'>
            <li className='orders__name'>Number ID</li>
            <li className='orders__name orders__name--value'>#3456_768</li>
          </ul>
          {/* Order date */}
          <ul className='orders__list'>
            <li className='orders__name'>Dates</li>
            <li className='orders__name orders__name--value'>
              October 17, 2023
            </li>
          </ul>
          {/* Order status */}
          <ul className='orders__list'>
            <li className='orders__name'>Status</li>
            <li className='orders__name orders__name--value'>Delivered</li>
          </ul>
          {/* Order price */}
          <ul className='orders__list'>
            <li className='orders__name'>Price</li>
            <li className='orders__name orders__name--value'>$1234.00</li>
          </ul>
        </div>
        {/* Second order */}
        <div className='orders__wrapper'>
          {/* Order ID */}
          <ul className='orders__list'>
            <li className='orders__name'>Number ID</li>
            <li className='orders__name orders__name--value'>#3456_768</li>
          </ul>
          {/* Order date */}
          <ul className='orders__list'>
            <li className='orders__name'>Dates</li>
            <li className='orders__name orders__name--value'>
              October 17, 2023
            </li>
          </ul>
          {/* Order status */}
          <ul className='orders__list'>
            <li className='orders__name'>Status</li>
            <li className='orders__name orders__name--value'>Delivered</li>
          </ul>
          {/* Order price */}
          <ul className='orders__list'>
            <li className='orders__name'>Price</li>
            <li className='orders__name orders__name--value'>$2434.55</li>
          </ul>
        </div>
        {/* Third order */}
        <div className='orders__wrapper'>
          {/* Order ID */}
          <ul className='orders__list'>
            <li className='orders__name'>Number ID</li>
            <li className='orders__name orders__name--value'>#3456_768</li>
          </ul>
          {/* Order date */}
          <ul className='orders__list'>
            <li className='orders__name'>Dates</li>
            <li className='orders__name orders__name--value'>
              October 17, 2023
            </li>
          </ul>
          {/* Order status */}
          <ul className='orders__list'>
            <li className='orders__name'>Status</li>
            <li className='orders__name orders__name--value'>Delivered</li>
          </ul>
          {/* Order price */}
          <ul className='orders__list'>
            <li className='orders__name'>Price</li>
            <li className='orders__name orders__name--value'>$755.00</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Orders;
