import { useState } from "react";
import Camera from "../assets/Camera";
import ChevronDown from "../assets/ChevronDown";
import ChevronLeft from "../assets/ChevronLeft";
import {
  profileItemData,
  profileListData,
} from "../utils/local/profileItemsData";
import ChevronUp from "../assets/ChevronUp";

const ProfileLayout = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("Account");

  return (
    <section className='profileLayout'>
      <button className='profileLayout__headBack'>
        <ChevronLeft /> back
      </button>
      <h2 className='profileLayout__tittle'>My Account</h2>
      <div className='profileLayout__container'>
        <header className='profileLayout__header'>
          {/* User logo */}
          <div className='profileLayout__logo'>
            <div className='profileLayout__imgBox'>
              <img
                src='https://randomuser.me/api/portraits/thumb/women/19.jpg'
                alt='profile image'
                className='profileLayout__img'
              />
              <button className='profileLayout__uploadBtn'>
                <Camera />
              </button>
            </div>
            <strong className='profileLayout__userName'>Sofia Havertz</strong>
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
                      setActiveTab(item.id);
                      setSelected(item.name);
                      setIsShowList(false);
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
