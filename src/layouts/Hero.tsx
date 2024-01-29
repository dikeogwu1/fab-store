import SubNabar from "../components/SubNabar";
import { heroType } from "../types/random";

const Hero = ({ link, page, desc, name, bgImage }: heroType) => {
  return (
    <section className='hero'>
      <header
        className='hero__header'
        style={{
          background: `url(${bgImage})`,
        }}
      >
        <div className='hero__subNav'>
          <SubNabar active={false} name='Home' url='/' />
          <SubNabar active={true} name={`${name}`} url={`/${link}`} />
        </div>
        <h2 className='hero__tittle'>{page}</h2>
        <p className='hero__desc'>{desc}</p>
      </header>
    </section>
  );
};

export default Hero;
