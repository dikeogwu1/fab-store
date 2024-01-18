import { useEffect, useRef } from "react";
import MiniCartItems from "../components/MiniCartItems";
// redux
import { useSelector } from "react-redux";
import { storeType } from "../store";

const MiniCart = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { miniCartModal } = useSelector((store: storeType) => store.modal);

  useEffect(() => {
    if (miniCartModal) {
      dialogRef.current?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      dialogRef.current?.close();
      document.body.style.overflow = "auto";
    }
  }, [miniCartModal]);

  return (
    <dialog ref={dialogRef} className='miniCart'>
      <MiniCartItems />
    </dialog>
  );
};

export default MiniCart;
