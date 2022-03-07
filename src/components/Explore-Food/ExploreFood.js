import React from "react";
import img3 from "../../images/img/img-3.jpg";
import img4 from "../../images/img/img-4.jpg";
import img5 from "../../images/img/img-5.jpg";

const ExploreFood = () => {
  return (
    <section id="explore-food">
      <div className="explore-food wrapper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="text-content text-center">
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
          <div className="row pt-5">
            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img3} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4>Rainbow Vegetable Sandwich</h4>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    $10.50 <del>$11.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img4} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4>Vegetarian Burger</h4>
                  <p>Time: 10 - 15 Minutes | Serves: 1</p>
                  <span>
                    $9.50 <del>$10.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-lg-0 mb-5">
              <div className="card">
                <img src={img5} className="img-fluid" alt="" />
                <div className="pt-3">
                  <h4>Raspberry Stuffed French Toast</h4>
                  <p>Time: 15 - 20 Minutes | Serves: 1</p>
                  <span>
                    $12.50 <del>$13.70</del>
                  </span>
                  <button className="mt-4 main-btn">Order Now</button>
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
