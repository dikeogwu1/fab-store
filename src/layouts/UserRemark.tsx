import React, { useEffect, useState } from "react";
import ChevronDown from "../assets/ChevronDown";
import { btns, userRemark } from "../utils/local/remarks";

const UserRemark = () => {
  const [activeTab, setActiveTab] = useState<number>(2);

  useEffect(() => {
    const allBtn = document.querySelectorAll(".remark__btn");
    allBtn.forEach((btn) => {
      btn.classList.remove("remark__btn--active");
      const singleButton = btn as HTMLElement;

      if (parseInt(singleButton.dataset.id!) === activeTab) {
        btn.classList.add("remark__btn--active");
      }
    });
  }, [activeTab]);

  return (
    <div className='remark'>
      <header className='remark__headers remark__headersLG'>
        {btns.map((btn, i) => {
          const { id, value } = btn;
          return (
            <button
              className='remark__btn'
              key={id}
              data-id={i}
              onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
                setActiveTab(i);
                e.currentTarget.classList.add("remark__btn--active");
              }}
            >
              <strong className='remark__tittle'>{value}</strong>
              <span className='remark__btnIcon'>
                <ChevronDown />
              </span>
            </button>
          );
        })}
      </header>
      {userRemark.map((remark, i) => {
        const { id, name, component } = remark;
        let coordinate: string = "none";
        if (i === activeTab) {
          coordinate = "remark__item--active";
        }
        return (
          <div className='remark__box' key={id}>
            <header className='remark__headers remark__headersSM'>
              <button
                className='remark__btn'
                data-id={i}
                onClick={(
                  e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                ) => {
                  setActiveTab(i);
                  e.currentTarget.classList.add("remark__btn--active");
                }}
              >
                <strong className='remark__tittle'>{name}</strong>
                <span className='remark__btnIcon'>
                  <ChevronDown />
                </span>
              </button>
            </header>
            {/* REMARKS */}
            <div className={`remark__item ${coordinate}`}>{component}</div>
          </div>
        );
      })}
    </div>
  );
};

export default UserRemark;
