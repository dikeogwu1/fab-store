import React, { useEffect, useRef } from "react";
import MiniCartItems from "../components/MiniCartItems";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { closeMiniCartModal } from "../features/modal";

const MiniCart = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { miniCartModal } = useSelector((store: storeType) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (miniCartModal) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = "auto";
    }
  }, [miniCartModal]);

  const handleClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>
  ): void => {
    const dialogElement = e.target as HTMLElement;
    if (dialogElement.className === "miniCart") {
      dispatch(closeMiniCartModal());
    }
  };

  return (
    <dialog ref={dialogRef} className='miniCart' onClick={handleClick}>
      <MiniCartItems />
    </dialog>
  );
};

export default MiniCart;
