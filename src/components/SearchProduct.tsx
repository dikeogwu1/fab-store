import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import Close from "../assets/Close";
import Search from "../assets/Search";
import { closeSearchModal } from "../features/modal";

const SearchProduct = () => {
  const { searchModal } = useSelector((store: storeType) => store.modal);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (searchModal) {
  //     dialogRef.current?.showModal();
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     dialogRef.current?.close();
  //     document.body.style.overflow = "auto";
  //   }
  // }, [searchModal]);

  useEffect(() => {
    if (searchModal) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        dialogRef.current?.classList.add("search--open");
      }, 60);
    } else {
      dialogRef.current?.classList.remove("search--open");
      setTimeout(() => {
        dialogRef.current?.close();
        document.body.style.overflow = "auto";
      }, 200);
    }

    const checkScreenSize = (): void => {
      if (window.innerWidth < 768) {
        dispatch(closeSearchModal());
      }
    };
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, [searchModal]);

  const handleClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ): void => {
    const dialogElement = e.target as HTMLElement;
    if (dialogElement.classList.contains("search")) {
      dispatch(closeSearchModal());
    }
  };

  return (
    <dialog ref={dialogRef} className='search' onClick={handleClick}>
      <div className='search__item'>
        <button
          className='search__close'
          onClick={() => dispatch(closeSearchModal())}
        >
          <Close />
        </button>
        <form className='search__form'>
          <input
            type='text'
            name='search'
            placeholder='Search for your favorite'
            className='search__input'
          />
          <button className='search__submit'>
            <Search />
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default SearchProduct;
