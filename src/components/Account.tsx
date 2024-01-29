const Account = () => {
  return (
    <section className='account'>
      <h3 className='account__tittle'>Account Details</h3>
      <form className='account__form'>
        {/* First name */}
        <div className='account__inputBox'>
          <label htmlFor='firstName' className='account__label'>
            First name *
          </label>
          <input
            type='text'
            name='firstName'
            autoComplete='off'
            id='firstName'
            placeholder='First name'
            className='account__input'
          />
        </div>
        {/* Last name */}
        <div className='account__inputBox'>
          <label htmlFor='lastName' className='account__label'>
            Last name *
          </label>
          <input
            type='text'
            name='lastName'
            autoComplete='off'
            id='lastName'
            placeholder='Last name'
            className='account__input'
          />
        </div>
        {/* Display name */}
        <div className='account__inputBox'>
          <label htmlFor='displayName' className='account__label'>
            Display name *
          </label>
          <input
            type='text'
            name='displayName'
            autoComplete='off'
            id='displayName'
            placeholder='Display name'
            className='account__input'
          />
          <p className='account__desc'>
            This will be how your name will be displayed in the account section
            and in reviews
          </p>
        </div>
        {/* Email name */}
        <div className='account__inputBox'>
          <label htmlFor='email' className='account__label'>
            Email *
          </label>
          <input
            type='email'
            name='email'
            id='email'
            autoComplete='off'
            placeholder='Email'
            className='account__input'
          />
        </div>
        {/* Change password */}
        <h4 className='account__topic'>Password</h4>
        {/* Old password */}
        <div className='account__inputBox'>
          <label htmlFor='oldPassword' className='account__label'>
            Old password *
          </label>
          <input
            type='password'
            name='oldPassword'
            id='oldPassword'
            autoComplete='off'
            placeholder='Old password'
            className='account__input'
          />
        </div>
        {/* New password */}
        <div className='account__inputBox'>
          <label htmlFor='newPassword' className='account__label'>
            New password *
          </label>
          <input
            type='password'
            name='newPassword'
            id='newPassword'
            autoComplete='off'
            placeholder='New password'
            className='account__input'
          />
        </div>
        {/* Repeat new password */}
        <div className='account__inputBox'>
          <label htmlFor='repeatNewPassword' className='account__label'>
            Repeat new password *
          </label>
          <input
            type='password'
            name='repeatNewPassword'
            id='repeatNewPassword'
            autoComplete='off'
            placeholder='Repeat new password'
            className='account__input'
          />
        </div>

        <button className='account__btn'>Save changes</button>
      </form>
    </section>
  );
};

export default Account;
