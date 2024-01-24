import SubNabar from "../components/SubNabar";

const ShopLayout = () => {
  return (
    <section className='shopLayout'>
      <header className='shopLayout__header'>
        <div className='shopLayout__subNav'>
          <SubNabar active={false} name='Home' url='/' />
          <SubNabar active={true} name='Shop' url='/shop' />
        </div>
        <h2 className='shopLayout__tittle'>Shop Page</h2>
        <p className='shopLayout__desc'>
          More than just fashion. It’s a lifestyle.
        </p>
      </header>
    </section>
  );
};

export default ShopLayout;
