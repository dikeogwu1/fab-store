const DiscountTag = ({ newProduct }: { newProduct?: boolean }) => {
  return (
    <div className='tags'>
      <strong className='tags__text'>{newProduct ? "New" : "Hot"}</strong>
      <strong className='tags__text  tags__text--discounted'>-50%</strong>
    </div>
  );
};

export default DiscountTag;
