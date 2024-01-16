import { instagramImg } from "../utils/local/instagram";

const InstagramImg = () => {
  return (
    <section className='instagramImg'>
      {instagramImg.map((image) => {
        const { id, img } = image;
        return (
          <div className='instagramImg__imgBox' key={id}>
            <img src={img} alt='instagram pic' />
          </div>
        );
      })}
    </section>
  );
};

export default InstagramImg;
