import { Link } from "react-router-dom";
import ArrowRight from "../assets/ArrowRight";
import Article from "../components/Article";

const LatestArticles = ({ text, dated }: { text: string; dated: boolean }) => {
  return (
    <section className='articles'>
      <header className='articles__header'>
        <h2 className='articles__tittle'>{text}</h2>
        <Link to='/blog' className='articles__btn'>
          View More
          <ArrowRight />
        </Link>
      </header>
      {!dated && <Article />}
    </section>
  );
};

export default LatestArticles;
