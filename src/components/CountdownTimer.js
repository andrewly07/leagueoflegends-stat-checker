import React, { useState, useRef, useEffect } from "react";
import "../App.css";
// import Navbar from "./components/Navbar";

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMins, setTimerMins] = useState("00");
  const [timerSecs, setTimerSecs] = useState("00");

  let interval = useRef();

  const StartTimer = () => {
    //change date
    const countdownDate = new Date("August 14, 2022 00:00:00").getTime();

    interval.current = setInterval(() => {
      const now = new Date().getTime();

      const gap = countdownDate - now;
      //calculations for times
      let days = Math.floor(gap / (1000 * 60 * 60 * 24));
      let hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let mins = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
      let secs = Math.floor((gap % (1000 * 60)) / 1000);

      if (gap < 0) {
        //stop timer
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(mins);
        setTimerSecs(secs);
      }
    }, 1000);
  };
  // const ColoredLine = ({ color }) => (
  //   <hr
  //     style={{
  //       color: color,
  //       backgroundColor: color,
  //       height: 5,
  //     }}
  //   />
  // );
  //
  useEffect(() => {
    const someref = interval.current;
    StartTimer();
    return () => {
      clearInterval(someref);
    };
  });

  return (
    <div>
      {/* <Navbar /> */}
      <section className="timer-container">
        <section className="timer">
          <div>
            <section>
              <p>{timerDays}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMins}</p>
              <p>
                <small>Mins</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSecs}</p>
              <p>
                <small>Secs</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
  );
};

export default CountdownTimer;
