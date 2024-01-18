import { useEffect, useState } from "react";
import { timer } from "../types/random";

const times = {
  days: "0",
  hours: "0",
  minutes: "0",
  seconds: "0",
};

const CountDownTimer = () => {
  const [timer, setTimer] = useState<timer>(times);

  // get dates
  let aheadDate = new Date();
  let aheadDay = aheadDate.getDate();
  let aheadMonth = aheadDate.getMonth();
  let aheadYear = aheadDate.getFullYear();

  // future dates
  const upFront = new Date(aheadYear, aheadMonth, aheadDay + 3, 23, 30, 0);

  const startCountDown = (): void => {
    const countDownFrom = upFront.getTime();
    let countDown = setInterval(() => {
      const latest = new Date().getTime();
      const distance = countDownFrom - latest;
      const remDay = Math.floor(distance / (1000 * 60 * 60 * 24));
      const remHours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remMins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const remSecs = Math.floor((distance % (1000 * 60)) / 1000);

      const frontZero = (time: number): string => {
        if (time < 10) {
          return `0${time}`;
        }
        return time.toString();
      };

      if (distance < 0) {
        clearInterval(countDown);
      } else {
        // update timer
        setTimer({
          days: frontZero(remDay),
          hours: frontZero(remHours),
          minutes: frontZero(remMins),
          seconds: frontZero(remSecs),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startCountDown();
  }, []);

  return (
    <div className='countDown'>
      <strong className='countDown__expiration'>Offer expires in:</strong>
      <div className='countDown__wrapper'>
        <div className='countDown__timerBox'>
          <div className='countDown__timer'>
            <h3 className='countDown__time'>{timer.days}</h3>
          </div>
          <strong className='countDown__span'>Days</strong>
        </div>
        <div className='countDown__timerBox'>
          <div className='countDown__timer'>
            <h3 className='countDown__time'>{timer.hours}</h3>
          </div>
          <strong className='countDown__span'>hours</strong>
        </div>
        <div className='countDown__timerBox'>
          <div className='countDown__timer'>
            <h3 className='countDown__time'>{timer.minutes}</h3>
          </div>
          <strong className='countDown__span'>minutes</strong>
        </div>
        <div className='countDown__timerBox'>
          <div className='countDown__timer'>
            <h3 className='countDown__time'>{timer.seconds}</h3>
          </div>
          <strong className='countDown__span'>seconds</strong>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
