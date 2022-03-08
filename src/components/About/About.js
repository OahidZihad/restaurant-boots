import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import img1 from "../../images/img/img-1.png";
import img2 from "../../images/img/img-2.png";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section id="about">
      <div className="about-section wrapper">
        <div className="container">
          <div className="row align-items-center">
            <div data-aos="fade-right" className="col-lg-7 col-md-12 mb-lg-0 mb-5">
              <div className="card border-0">
                <img src={img1} class="img-fluid" alt="" />
              </div>
            </div>
            <div data-aos="fade-left" className="col-lg-5 col-md-12 text-sec">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab
                praesentium fugiat nostrum cum aut minus ut esse dolorum aliquam
                consectetur!
              </p>
              <button className="main-btn mt-4">Learn More</button>
            </div>
          </div>
        </div>
        <div className="container food-type">
          <div className="row align-items-center">
            <div data-aos="fade-right" className="col-lg-5 col-md-12 text-sec mb-lg-0 mb-5">
              <h2>
                We make everything by hand with the best possible ingredients
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                voluptatibus. Asperiores reiciendis quasi et saepe ut.
                Dignissimos, quae asperiores ratione odio provident fugiat
                suscipit similique, tempore repellat ut officia, consequuntur
                modi sint. Nemo animi maxime natus omnis odit tempora quos?
                Dignissimos, quae asperiores ratione odio provident fugiat.
              </p>
              <ul className="list-unstyled py-3">
                <li>Lorem similique, tempore repellat ut.</li>
                <li>Lorem tempore repellat ut officia.</li>
                <li>Lorem similique, tempore repellat ut.</li>
              </ul>
              <button className="main-btn mt-4">Learn More</button>
            </div>
            <div data-aos="fade-left" className="col-lg-7 col-md-12">
              <div className="card border-0">
                <img
                  src={img2}
                  class="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
