import { useEffect, useState } from "react";
import Camera from "../assets/Camera";
import ChevronDown from "../assets/ChevronDown";
import ChevronLeft from "../assets/ChevronLeft";
import {
  profileItemData,
  profileListData,
} from "../utils/local/profileItemsData";
import ChevronUp from "../assets/ChevronUp";
import { Link, useNavigate } from "react-router-dom";
import { getTokenFromLocalStorage } from "../utils/functions/localStorage";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { setCurrentUser, userLogout } from "../features/user";
import { closeMobileNav } from "../features/modal";
import { setActiveTap } from "../features/profileTap";

const ProfileLayout = () => {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Account");
  const { firstName, lastName, displayName } = useSelector(
    (store: storeType) => store.user
  );
  const { activeTab } = useSelector((store: storeType) => store.profileTab);
  const disptach = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const item = getTokenFromLocalStorage();
    if (item) {
      disptach(
        setCurrentUser({
          firstName: item.user.firstName,
          lastName: item.user.lastName,
          displayName: item.user.displayName || "",
        })
      );
    }
    disptach(closeMobileNav());
  }, []);

  return (
    <section className='profileLayout'>
      <Link to='/' className='profileLayout__headBack'>
        <ChevronLeft /> back
      </Link>
      <h2 className='profileLayout__tittle'>My Account</h2>
      <div className='profileLayout__container'>
        <header className='profileLayout__header'>
          {/* User logo */}
          <div className='profileLayout__logo'>
            <div className='profileLayout__imgBox'>
              <img
                src='https://res.cloudinary.com/dikeogwu1/image/upload/v1708107175/Fabstore%20e-commerce/27470334_7309681_sjxay3.jpg'
                alt='profile image'
                className='profileLayout__img'
              />
              <button className='profileLayout__uploadBtn'>
                <Camera />
              </button>
            </div>
            {displayName ? (
              <strong className='profileLayout__userName'>{displayName}</strong>
            ) : (
              <strong className='profileLayout__userName'>
                {firstName} {lastName}
              </strong>
            )}
          </div>
          {/* Profile item */}
          <div className='profileLayout__itemBox'>
            <h3 className='profileLayout__topic'>{selected}</h3>
            <button
              className='profileLayout__toggle'
              onClick={() => setIsShowList(!isShowList)}
            >
              {isShowList ? <ChevronUp /> : <ChevronDown />}
            </button>
            <div
              className={`profileLayout__list ${
                !isShowList && "profileLayout__list--hide"
              }`}
            >
              {profileItemData.map((item) => {
                return (
                  <button
                    className={`profileLayout__item ${
                      item.id === activeTab && "profileLayout__item--active"
                    }`}
                    key={item.id}
                    onClick={() => {
                      disptach(setActiveTap(item.id));
                      setSelected(item.name);
                      setIsShowList(false);
                      if (item.name === "Log Out") {
                        disptach(userLogout());
                        navigate("/");
                      }
                    }}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
          </div>
        </header>
        <div className='profileLayout__details'>
          {profileListData.map((detail) => {
            return (
              <div
                className={`profileLayout__detail ${
                  detail.id === activeTab && "profileLayout__detail--active"
                }`}
                key={detail.id}
              >
                {detail.component}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfileLayout;
