import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { storeType } from "../store";
import Close from "../assets/Close";
import Search from "../assets/Search";
// redux
import { useDispatch, useSelector } from "react-redux";
import { closeSearchModal } from "../features/modal";
import {
  searchByName,
  setDispayedFilter,
  setFilterName,
} from "../features/filters";

const SearchProduct = () => {
  const { searchModal } = useSelector((store: storeType) => store.modal);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    if (inputRef.current?.value) {
      dispatch(closeSearchModal());
      dispatch(searchByName(inputRef.current?.value));
      dispatch(setFilterName({ name: "" }));
      dispatch(setDispayedFilter({ filterName: inputRef.current.value }));
      navigate("/shop");
    }
  };

  useEffect(() => {
    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }
  }, []);

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
            autoComplete='off'
            ref={inputRef}
            placeholder='Search for your favorite'
            className='search__input'
          />
          <button className='search__submit' onClick={handleSubmit}>
            <Search />
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default SearchProduct;
