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
            <button className='article__btn'>
              Read More <ArrowRight />
            </button>
          </article>
        );
      })}
    </div>
  );
};

export default Article;
