import TicketPercent from "../assets/TicketPercent";

const Coupon = () => {
  return (
    <div className='coupon'>
      <h4 className='coupon__tittle'>Have a coupon?</h4>
      <p className='coupon__desc'>Add your code for an instant cart discount</p>
      <form className='coupon__form'>
        <TicketPercent />
        <input
          type='text'
          placeholder='Coupon Code'
          name='coupon'
          className='coupon__input'
        />
        <button className='coupon__apply'>Apply</button>
      </form>
    </div>
  );
};

export default Coupon;
