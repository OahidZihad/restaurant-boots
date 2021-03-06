import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img3 from "../../images/img/img-3.jpg";
import img4 from "../../images/img/img-4.jpg";
import img5 from "../../images/img/img-5.jpg";

const ExploreFood = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="explore-food" style={{overflowX:"hidden"}}>
      <div className="explore-food wrapper" style={{overflowX:"hidden"}}>
        <div className="container" style={{overflowX:"hidden"}}>
          <div className="row" style={{overflowX:"hidden"}}>
            <div className="col-sm-12" style={{overflowX:"hidden"}}>
              <div data-aos="fade-up" className="text-content text-center">
                <h2>Explore Our Foods</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Inventore, pariatur! Optio id amet modi, cumque commodi
                  architecto? Quam, unde fuga reprehenderit beatae eius modi
                  dolor nisi saepe iste nesciunt. Nihil dolor sit amet
                  consectetur, adipisicing elit. Inventore, pariatur! Optio id
                  amet modi.
                </p>
              </div>
            </div>
          </div>
          <div className="row pt-5" style={{overflowX:"hidden"}}>
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5" style={{overflowX:"hidden"}}>
              <div className="card">
                <img data-aos="zoom-in-down" src={img3} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4 data-aos="fade-up-right">Rainbow Vegetable Sandwich</h4>
                  <p data-aos="fade-up-right">Time: 15 - 20 Minutes | Serves: 1</p>
                  <span data-aos="fade-up-right">
                    $10.50 <del data-aos="fade-up-right">$11.70</del>
                  </span>
                  <button data-aos="fade-up-right" className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>

            <div  className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img data-aos="zoom-in-down" src={img4} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4 data-aos="fade-up-right">Vegetarian Burger</h4>
                  <p data-aos="fade-up-right">Time: 10 - 15 Minutes | Serves: 1</p>
                  <span data-aos="fade-up-right">
                    $9.50 <del data-aos="fade-up-right">$10.70</del>
                  </span>
                  <button data-aos="fade-up-right" className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img data-aos="zoom-in-down" src={img5} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4 data-aos="fade-up-right">Raspberry Stuffed French Toast</h4>
                  <p data-aos="fade-up-right">Time: 15 - 20 Minutes | Serves: 1</p>
                  <span data-aos="fade-up-right">
                    $12.50 <del data-aos="fade-up-right">$13.70</del>
                  </span>
                  <button data-aos="fade-up-right" className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreFood;
