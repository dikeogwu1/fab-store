import { Link } from "react-router-dom";

const BrandLogo = () => {
  return (
    <Link to='/' className='brand'>
      <strong className='brand__logo'>
        <span className='brand__name'>FAB'</span>
        <span className='brand__label'>store</span>
      </strong>
    </Link>
  );
};

export default BrandLogo;
