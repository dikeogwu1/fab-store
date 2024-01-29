import GridTwo from "../assets/GridTwo";
import GridOne from "../assets/GridOne";
import GridTwoSm from "../assets/GridTwoSm";
import GridThree from "../assets/GridThree";

const Sorting = () => {
  return (
    <div className='sorting'>
      <select name='sortBy' className='sorting__sortBy'>
        <option value='newest'>Sort by</option>
        <option value='newest'>Newest</option>
        <option value='oldest'>Oldest</option>
      </select>
      {/* Grid display buttons, to appear on big screens */}
      <div className='sorting__gridBtns'>
        {/* grid three icon */}
        <button className='sorting__grid sorting__grid--lg sorting__grid--active'>
          <GridThree />
        </button>
        {/* grid two icon lg */}
        <button className='sorting__grid sorting__grid--lg'>
          <GridTwo />
        </button>
        {/* grid two sm */}
        <button className='sorting__grid sorting__grid--sm'>
          <GridTwoSm />
        </button>
        {/*  grid one */}
        <button className='sorting__grid sorting__grid--sm'>
          <GridOne />
        </button>
      </div>
    </div>
  );
};

export default Sorting;
