import { useParams, Link } from "react-router-dom";
import SubNabar from "../components/SubNabar";
import { blogData, months } from "../utils/local/blogData";
import ChevronLeft from "../assets/ChevronLeft";
import UserLight from "../assets/UserLight";
import AllBlog from "../components/AllBlog";
import ArrowRight from "../assets/ArrowRight";
import { useEffect } from "react";

const SingleBlogLayout = () => {
  const { id } = useParams();
  const blogID = parseInt(id!);
  const { img, exerpt, date } = blogData[blogID - 1];

  const postedMonth: string = `${months[date.getMonth()]}`;
  const postedDate: string = `${date.getDay()}`;
  const postedYear: string = `${date.getFullYear()}`;

  const featured = blogData
    .slice(0, 4)
    .filter((blog) => blog.featured === true);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <article className='singleBlog'>
      <div className='singleBlog__subNav'>
        <SubNabar name='Home' url='/' active={false} />
        <SubNabar name='Blog' url='/blog' active={false} />
        <SubNabar name={`${exerpt}`} url={`/blog/${blogID}`} active={true} />
      </div>
      <Link to='/blog' className='singleBlog__headBack'>
        <ChevronLeft /> back
      </Link>
      <header className='singleBlog__header'>
        <strong className='singleBlog__tip'>Article</strong>
        <h2 className='singleBlog__tittle'>{exerpt}</h2>
        <div className='singleBlog__origin'>
          <strong className='singleBlog__author'>
            <UserLight /> Fabian Ikem
          </strong>
          <strong className='singleBlog__author'>
            {postedMonth} {postedDate}, {postedYear}
          </strong>
        </div>
      </header>

      <div className='singleBlog__item'>
        <div className='singleBlog__poster'>
          <img src={img} alt='' />
        </div>

        {/* Poster text */}
        <div className='singleBlog__desc'>
          <p className='singleBlog__text'>
            Your bathroom serves a string of busy functions on a daily basis.
            See how you can make all of them work, and still have room for
            comfort and relaxation.
          </p>
        </div>
        {/* Poster text */}
        <div className='singleBlog__desc'>
          <h4 className='singleBlog__topic'>
            A cleaning hub with built-in ventilation
          </h4>
          <p className='singleBlog__text'>
            Use a rod and a shower curtain to create a complement to your
            cleaning cupboard. Unsightly equipment is stored out of sight yet
            accessibly close – while the air flow helps dry any dampness.
          </p>
        </div>

        {/* TOPIC */}
        <section className='singleBlog__box'>
          <div className='singleBlog__doubleImg'>
            <div className='singleBlog__postImg singleBlog__postImg--lg'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636233503/my%20images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands_158538-9453_ybmczz.jpg'
                alt='Fashion'
              />
            </div>
            <div className='singleBlog__postImg'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636238381/my%20images/source_vwnpjo.jpg'
                alt='Fashion'
              />
            </div>
          </div>
          {/* Poster text */}
          <div className='singleBlog__descBox'>
            <div className='singleBlog__desc'>
              <h4 className='singleBlog__topic'>
                Storage with a calming effect
              </h4>
              <p className='singleBlog__text'>
                Having a lot to store doesn’t mean it all has to go in a
                cupboard. Many bathroom items are better kept out in the open –
                either to be close at hand or are nice to look at. Add a plant
                or two to set a calm mood for the entire room (and they’ll
                thrive in the humid air).
              </p>
            </div>
            <div className='singleBlog__desc singleBlog__desc--lg'>
              <h4 className='singleBlog__topic'>
                Kit your clutter for easy access
              </h4>
              <p className='singleBlog__text'>
                Even if you have a cabinet ready to swallow the clutter, it’s
                worth resisting a little. Let containers hold kits for different
                activities – home spa, make-up, personal hygiene – to bring out
                or put back at a moment’s notice.
              </p>
            </div>
          </div>
        </section>

        {/* SECOND TOPIC sm only */}
        <section className='singleBlog__box singleBlog__box--sm '>
          <div className='singleBlog__imgBox'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636236420/my%20images/02.jpg_o5lj5z.jpg'
              alt='Fashion'
            />
          </div>
          {/* Poster text */}
          <div className='singleBlog__desc'>
            <h4 className='singleBlog__topic'>
              Kit your clutter for easy access
            </h4>
            <p className='singleBlog__text'>
              Even if you have a cabinet ready to swallow the clutter, it’s
              worth resisting a little. Let containers hold kits for different
              activities – home spa, make-up, personal hygiene – to bring out or
              put back at a moment’s notice.
            </p>
          </div>
        </section>

        {/* LAST TOPIC */}
        <section className='singleBlog__lastBox'>
          <div className='singleBlog__imgBox'>
            <img
              src='https://res.cloudinary.com/dikeogwu1/image/upload/v1636233503/my%20images/fashion-portrait-young-businessman-handsome-model-man-casual-cloth-suit-with-accessories-hands_158538-9453_ybmczz.jpg'
              alt='Fashion'
            />
          </div>
          {/* Poster text */}
          <div className='singleBlog__descBox'>
            <div className='singleBlog__desc'>
              <h4 className='singleBlog__topic'>An ecosystem of towels</h4>
              <p className='singleBlog__text'>
                Racks or hooks that allow air to circulate around each towel
                prolong their freshness. They dry quick and the need for
                frequent washing is minimized.
              </p>
            </div>
            {/* Poster text */}
            <div className='singleBlog__desc'>
              <h4 className='singleBlog__topic'>Make your mop disappear</h4>
              <p className='singleBlog__text'>
                Having your cleaning tools organized makes them easier to both
                use and return to. When they’re not needed, close the curtain
                and feel the peace of mind it brings.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className='singleBlog__footer'>
        <div className='singleBlog__more'>
          <h4 className='singleBlog__moreText'>You might also like</h4>
          <Link to='/blog' className='singleBlog__moreLink'>
            More Articles <ArrowRight />
          </Link>
        </div>
        <AllBlog items={featured} more={false} />
      </div>
    </article>
  );
};

export default SingleBlogLayout;
