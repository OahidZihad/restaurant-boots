import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import review1 from "../../images/review/review-1.jpg";
import review2 from "../../images/review/review-2.jpg";

const Testimonial = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <section id="testimonial" style={{overflowX:"hidden"}}>
      <div className="wrapper testimonial-section" style={{overflowX:"hidden"}}>
        <div className="container text-center" style={{overflowX:"hidden"}}>
          <div className="text-center pb-4">
            <h2>Testimonial</h2>
          </div>

          <div className="row" style={{overflowX:"hidden"}}>
            <div className="col-sm-12 col-lg-10 offset-lg-1">
              <div
                data-aos="zoom-in"
                id="carouselExampleCaptions"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>
                <div class="carousel-inner" style={{overflowX:"hidden"}}>
                  <div class="carousel-item active">
                    <div className="carousel-caption">
                      <img src={review1} alt="..." />
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{" "}
                      </p>
                      <h5>Johnthan Doe - UX Designer</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="carousel-caption">
                      <img src={review2} alt="..." />
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{" "}
                      </p>
                      <h5>Maccy Doe - Front End</h5>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="carousel-caption">
                      <img src={review1} alt="..." />
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.{" "}
                      </p>
                      <h5>Johnthan Doe - UX Designer</h5>
                    </div>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
