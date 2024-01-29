import { blogType } from "../types/random";
import BlogItem from "./BlogItem";
import ShowMore from "./ShowMore";

type blog = {
  items: blogType;
  more: boolean;
};

const AllBlog = ({ items, more }: blog) => {
  return (
    <div className='allBlog'>
      <div className='allBlog__wrapper'>
        {items.map((blog) => {
          return (
            <div className='allBlog__item' key={blog.id}>
              <BlogItem blog={blog} />
            </div>
          );
        })}
      </div>
      {more && <ShowMore />}
    </div>
  );
};

export default AllBlog;
