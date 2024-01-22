import StarFull from "../assets/StarFull";
import StarPlan from "../assets/StarPlan";

const AllStars = ({ rating }: { rating: number }) => {
  if (rating === 0) {
    <div className='star'></div>;
  }

  if (rating >= 1 && rating < 2) {
    return (
      <div className='star'>
        <StarFull />
        <StarPlan />
        <StarPlan />
        <StarPlan />
        <StarPlan />
      </div>
    );
  }
  if (rating >= 2 && rating < 3) {
    return (
      <div className='star'>
        <StarFull />
        <StarFull />
        <StarPlan />
        <StarPlan />
        <StarPlan />
      </div>
    );
  }
  if (rating >= 3 && rating < 4) {
    return (
      <div className='star'>
        <StarFull />
        <StarFull />
        <StarFull />
        <StarPlan />
        <StarPlan />
      </div>
    );
  }
  if (rating >= 4 && rating < 5) {
    return (
      <div className='star'>
        <StarFull />
        <StarFull />
        <StarFull />
        <StarFull />
        <StarPlan />
      </div>
    );
  }

  return (
    <div className='star'>
      <StarFull />
      <StarFull />
      <StarFull />
      <StarFull />
      <StarFull />
    </div>
  );
};

export default AllStars;
