import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
  return (
    <section id="newsletter">
      <div className="newsletter wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center pb-4">
                <h2 data-aos="fade-up">Hurry up! Subscribe our newsletter and get 25% Off</h2>
                <p data-aos="fade-up">
                  Limited time offer for this month. No credit card required.
                </p>
              </div>
              <form action="" className="newsletter">
                <div className="row">
                  <div className="col-md-8 col-12">
                    <input data-aos="fade-right"
                      type="email"
                      placeholder="Email Address Here"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="col-md-4 col-12">
                    <button data-aos="fade-left" className="main-btn" type="submit">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
