import ArrowRight from "../assets/ArrowRight";
import Article from "../components/Article";

const LatestArticles = () => {
  return (
    <section className='articles'>
      <header className='articles__header'>
        <h2 className='articles__tittle'>Latest Articles</h2>
        <button className='articles__btn'>
          View More
          <ArrowRight />
        </button>
      </header>
      <Article />
    </section>
  );
};

export default LatestArticles;
