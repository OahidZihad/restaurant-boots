import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const BookFood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section id="book-food">
      <div className="book-food">
        <div className="container book-food-text">
          <div data-aos="flip-left" className="row text-center">
            <div className="col-lg-9 col-md-12">
              <h2>Baked fresh daily by bakers with passion.</h2>
            </div>
            <div className="col-lg-3 col-md-12 mt-lg-0 mt-4">
              <button className="main-btn">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFood;
