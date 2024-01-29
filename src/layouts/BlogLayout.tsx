import { useState } from "react";
import ChevronDown from "../assets/ChevronDown";
import Sorting from "../components/Sorting";
import { blogBtn, blogItem } from "../utils/local/blogData";
import ChevronUp from "../assets/ChevronUp";

const BlogLayout = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("All blog");
  const [activeTab, setActiveTab] = useState<number>(1);

  return (
    <section className='blogLayout'>
      <header className='blogLayout__header'>
        <div className='blogLayout__topic'>
          <strong className='blogLayout__name'>{selected}</strong>
          <button
            className='blogLayout__toggle'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          <div
            className={`blogLayout__btns ${isOpen && "blogLayout__btns--show"}`}
          >
            {blogBtn.map((btn) => {
              return (
                <button
                  className={`blogLayout__btn ${
                    btn.id === activeTab && "blogLayout__btn--active"
                  }`}
                  key={btn.id}
                  onClick={() => {
                    setIsOpen(false);
                    setSelected(btn.name);
                    setActiveTab(btn.id);
                  }}
                >
                  {btn.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className='blogLayout__sort'>
          <Sorting />
        </div>
      </header>
      <div className='blogLayout__box'>
        {blogItem.map((item) => {
          return (
            <div
              className={`blogLayout__item ${
                item.id === activeTab && "blogLayout__item--active"
              }`}
              key={item.id}
            >
              {item.component}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogLayout;
