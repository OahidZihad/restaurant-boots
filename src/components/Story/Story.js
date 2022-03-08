import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Story = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section data-aos="flip-up" id="story" style={{overflowX:"hidden"}}>
      <div className="story-section" style={{overflowX:"hidden"}}>
        <div className="container" style={{overflowX:"hidden"}}>
          <div className="row" style={{overflowX:"hidden"}}>
            <div className="col-sm-12" style={{overflowX:"hidden"}}>
              <div className="text-content">
                <h2>
                  When a man's stomach is full it makes no difference whether he
                  is rich or poor.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae eveniet quia saepe nemo fugiat maiores alias quasi
                  natus voluptate fugit ipsam delectus pariatur ab incidunt
                  nostrum tempora nobis, magnam inventore.
                </p>
                <button className="main-btn mt-3">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
