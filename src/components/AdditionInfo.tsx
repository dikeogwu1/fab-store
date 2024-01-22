const AdditionalInfo = () => {
  return (
    <div className='additional'>
      <header className='additional__details'>
        <h4 className='additional__tittle'>Details</h4>
        <p className='additional__desc'>
          Unbox the epitome of style with our carefully packaged fashion items.
          Each piece is thoughtfully wrapped to preserve its pristine condition,
          ready to empower you with confidence and panache. Redefine your
          wardrobe with these fashion essentials that effortlessly transition
          from day to night.
        </p>
      </header>

      <ul className='additional__details'>
        <h4 className='additional__tittle'>Packaging</h4>
        <li className='additional__desc'>
          Width: 8 " Height: 1 ¾ " Length: 5 ½ "
        </li>
        <li className='additional__desc'>Weight: 1 lb 5 oz</li>
        <li className='additional__desc'>Package(s): 1</li>
      </ul>
    </div>
  );
};

export default AdditionalInfo;
