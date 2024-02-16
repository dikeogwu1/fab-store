import { useEffect } from "react";
import { useElements, useStripe } from "@stripe/react-stripe-js";
import { PaymentElement } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
// redux
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep, setCompletedStep } from "../features/orderSteps";
import { clearCart } from "../features/cart";
import { setIsLoading } from "../features/order";
import { storeType } from "../store";

const Card = ({ submiting }: { submiting: boolean }) => {
  const stripe = useStripe();
  const elements = useElements();
  const distpach = useDispatch();
  const { orderId } = useSelector((store: storeType) => store.order);

  const comfirmPayment = async () => {
    if (!stripe || !elements) {
      return;
    }
    const { error, paymentIntent } = await stripe?.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast.error(error.message);
      distpach(setIsLoading(false));
    } else if (paymentIntent && paymentIntent?.status === "succeeded") {
      distpach(setActiveStep(3));
      distpach(setCompletedStep(3));
      distpach(clearCart());
    } else {
      toast.error("unexpected state");
    }
  };

  useEffect(() => {
    if (submiting) {
      comfirmPayment();
    }
  }, [orderId]);

  return (
    <div className='details__inputBox'>
      <PaymentElement />
    </div>
  );
};

export default Card;
