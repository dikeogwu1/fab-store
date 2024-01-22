import { FaMehBlank } from "react-icons/fa";

const QuestionOnProduct = () => {
  return (
    <div className='questionProduct'>
      <header className='questionProduct__details'>
        <h4 className='questionProduct__tittle'>
          Questions about this product:
        </h4>
        <p className='questionProduct__icon'>
          <FaMehBlank />
        </p>
        <p className='questionProduct__desc'>
          No question was asked on product.
        </p>
        <button className='questionProduct__btn' disabled>
          Ask question
        </button>
      </header>
    </div>
  );
};

export default QuestionOnProduct;
