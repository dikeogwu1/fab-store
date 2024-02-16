import React, { useState } from "react";
import TicketPercent from "../assets/TicketPercent";
// utils
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import { storeType } from "../store";
import { changeTotal, useCoupon } from "../features/cart";

const Coupon = () => {
  const [value, setValue] = useState<string>("");
  const { total, isCoupon } = useSelector((store: storeType) => store.cart);
  const dispatch = useDispatch();

  const handleCouponCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!value) {
      toast.error("Provide coupon code");
      return;
    }
    if (value && value !== "JenkateMW") {
      toast.error("Invalid coupon code");
      return;
    }
    if (value === "JenkateMW" && !isCoupon) {
      dispatch(changeTotal(total - 25));
      dispatch(useCoupon());
      toast.success("$25.00 has been removed");
      return;
    }
    if (isCoupon) {
      toast.error("This coupon code has been used");
    }
  };

  return (
    <div className='coupon'>
      <h4 className='coupon__tittle'>Have a coupon?</h4>
      <p className='coupon__desc'>Add your code for an instant cart discount</p>
      <form className='coupon__form'>
        <TicketPercent />
        <input
          type='text'
          placeholder='Coupon Code'
          name='coupon'
          autoComplete='off'
          className='coupon__input'
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setValue(e.target.value)
          }
        />
        <button className='coupon__apply' onClick={handleCouponCode}>
          Apply
        </button>
      </form>
    </div>
  );
};

export default Coupon;
