const CheckoutTotal = () => {
  return (
    <div className='totalBox'>
      <div className='totalBox__subtotal'>
        <strong className='totalBox__subText'>Subtotal</strong>
        <strong className='totalBox__subAmount'>$1234.00</strong>
      </div>
      <div className='totalBox__total'>
        <strong className='totalBox__totalText'>Total</strong>
        <strong className='totalBox__totalText'>$1345.00</strong>
      </div>
      <button className='totalBox__checkout'>Checkout</button>
    </div>
  );
};

export default CheckoutTotal;
