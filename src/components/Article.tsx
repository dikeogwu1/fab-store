import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import { latestArticles } from "../utils/local/articlesData";

const Article = () => {
  return (
    <div className='article'>
      {latestArticles.map((article) => {
        const { id, img, name } = article;
        return (
          <article className='article__item' key={id}>
            <div className='article__imgBox'>
              <img src={img} alt={name} />
            </div>
            <h4 className='article__name'>{name}</h4>
            <Link to={`/blog/${id}`} className='article__btn'>
              Read More <ArrowRight />
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default Article;
