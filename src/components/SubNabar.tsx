import { Link } from "react-router-dom";
import ChevronRight from "../assets/ChevronRight";

const SubNabar = ({
  url,
  name,
  active,
}: {
  url: string;
  name: string;
  active: boolean;
}) => {
  if (active) {
    return (
      <Link to={url} className='subNav subNav--active'>
        {name} <ChevronRight />
      </Link>
    );
  }

  return (
    <Link to={url} className='subNav'>
      {name} <ChevronRight />
    </Link>
  );
};

export default SubNabar;
