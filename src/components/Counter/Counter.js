import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import CountUp from 'react-countup';

const Counter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section data-aos="fade-up" id="counter">
      <section className="counter-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count1"></span>+
                <CountUp end={1560} duration={1.5} ></CountUp>
              </h2>
              <p>SAVINGS</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count2"></span>+
                <CountUp end={5265} duration={1.5} ></CountUp>
              </h2>
              <p>PHOTOS</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count3"></span>+
                <CountUp end={1145} duration={1.5} ></CountUp>
              </h2>
              <p>ROCKETS</p>
            </div>
            <div className="col-md-3 mb-lg-0 mb-md-0 mb-5">
              <h2>
                <span id="count4"></span>+
                <CountUp end={7150} duration={1.5} ></CountUp>
              </h2>
              <p>GLOBES</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Counter;
