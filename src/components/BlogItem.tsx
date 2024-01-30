import { Link } from "react-router-dom";
import { blogData, months } from "../utils/local/blogData";

type blogType = {
  blog: (typeof blogData)[0];
};

const BlogItem = ({ blog }: blogType) => {
  const { img, exerpt, date, id } = blog;
  const postedMonth: string = `${months[date.getMonth()]}`;
  const postedDate: string = `${date.getDay()}`;
  const postedYear: string = `${date.getFullYear()}`;

  return (
    <Link to={`/blog/${id}`} className='blogItem'>
      <div className='blogItem__imgBox'>
        <img src={img} alt='Blog poster' />
      </div>
      <h3 className='blogItem__tittle'>{exerpt}</h3>
      <p className='blogItem__desc'>
        {postedMonth} {postedDate}, {postedYear}
      </p>
    </Link>
  );
};

export default BlogItem;
