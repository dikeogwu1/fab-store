import { miniCartData } from "../utils/local/miniCartData";

const OrderComplete = () => {
  return (
    <div className='complete'>
      <div className='complete__container'>
        <strong className='complete__comp'>Thank you! 🎉</strong>
        <h2 className='complete__tittle'>Your order has been received</h2>
        <div className='complete__item'>
          {miniCartData.map((item) => {
            const { id, images, name } = item;
            return (
              <div className='complete__imgBox' key={id}>
                <sup className='complete__super'>{id}</sup>
                <img src={images[0].img} alt={name} />
              </div>
            );
          })}
        </div>
        <div className='complete__descBox'>
          <div className='complete__desc'>
            <p className='complete__text'>Order code:</p>
            <strong className='complete__value'>#0123_45678</strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Date:</p>
            <strong className='complete__value'>October 19, 2023</strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Total:</p>
            <strong className='complete__value'>$1,345.00</strong>
          </div>
          <div className='complete__desc'>
            <p className='complete__text'>Payment method:</p>
            <strong className='complete__value'>Credit Card</strong>
          </div>
        </div>
        <button className='complete__btn'>Purchase history</button>
      </div>
    </div>
  );
};

export default OrderComplete;
