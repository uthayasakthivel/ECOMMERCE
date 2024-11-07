import { useEffect, useState } from "react";
import { TimerType } from "../GenericTypes/TimerTypes";

const Timer = () => {
  // Target date (March 1st, 2025)
  const target = new Date(2025, 2, 1);

  // Define the state with the type of RemainingTime
  const [remainingTime, setRemainingTime] = useState<TimerType>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set the interval to update every second
    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = target.getTime() - now.getTime(); // Difference in milliseconds

      // If the target date is reached, stop the interval
      if (timeDiff <= 0) {
        clearInterval(interval);
        setRemainingTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      // Calculate the remaining time
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      // Update the state with the new remaining time
      setRemainingTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component is unmounted or target is reached
    return () => clearInterval(interval);
  }, [target]); // Run the effect only when the target date changes (though in this case, it won't change)

  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="flex flex-col">
          <p className="text-12 text-Text2">Days</p>
          <p className="font-inter text-36 font-bold"> {remainingTime.days}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-12 text-Text2">Hours</p>
          <p className="font-inter text-36 font-bold"> {remainingTime.hours}</p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-12 text-Text2">Minutes</p>
          <p className="font-inter text-36 font-bold">
            {remainingTime.minutes}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
          <span className="h-1 w-1 bg-Hover-Button inline-block rounded"></span>
        </div>
        <div className="flex flex-col">
          <p className="text-12 text-Text2">Seconds</p>
          <p className="font-inter text-36 font-bold">
            {remainingTime.seconds}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Timer;
