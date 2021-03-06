import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      useEffect(() => {
        Aos.init({ duration: 500 });
      }, []);
  return (
    <section id="faq" style={{overflowX:"hidden"}}>
      <div className="faq wrapper" style={{overflowX:"hidden"}}>
        <div className="container" style={{overflowX:"hidden"}}>
          <div className="row" style={{overflowX:"hidden"}}>
            <div className="col-sm-12" style={{overflowX:"hidden"}}>
              <div className="text-center pb-4">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
          <div className="row pt-5" style={{overflowX:"hidden"}}>
            <div data-aos="fade-right" className="col-sm-6 mb-4">
              <h4>
                <span>~</span>Is Foodies Bread really baked fresh each day?
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                aspernatur quibusdam commodi iste assumenda molestiae! Ducimus
                voluptatibus, fuga inventore necessitatibus at reiciendis neque
                iure deleniti.
              </p>
            </div>
            <div data-aos="fade-left" className="col-sm-6 mb-4">
              <h4>
                <span>~</span>Is Foodies Bread really baked fresh each day?
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                aspernatur quibusdam commodi iste assumenda molestiae! Ducimus
                voluptatibus, fuga inventore necessitatibus at reiciendis neque
                iure deleniti.
              </p>
            </div>
            <div data-aos="fade-right" className="col-sm-6 mb-4">
              <h4>
                <span>~</span>Is Foodies Bread really baked fresh each day?
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                aspernatur quibusdam commodi iste assumenda molestiae! Ducimus
                voluptatibus, fuga inventore necessitatibus at reiciendis neque
                iure deleniti.
              </p>
            </div>
            <div data-aos="fade-left" className="col-sm-6 mb-4">
              <h4>
                <span>~</span>Is Foodies Bread really baked fresh each day?
              </h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem
                aspernatur quibusdam commodi iste assumenda molestiae! Ducimus
                voluptatibus, fuga inventore necessitatibus at reiciendis neque
                iure deleniti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
