import { userRemark } from "../utils/local/Remark";

const UserRemark = () => {
  return (
    <div className='remark'>
      {userRemark.map((remark) => {
        const { id, name, component } = remark;
        return (
          <div className='remark__box' key={id}>
            <header className='remark__headers'>
              <h4 className='remark__tittle'>{name}</h4>
            </header>
            {/* <div className='remark__item'>{component}</div> */}
          </div>
        );
      })}
    </div>
  );
};

export default UserRemark;
