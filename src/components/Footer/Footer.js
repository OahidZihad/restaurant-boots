import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <footer  id="footer" style={{overflowX:"hidden"}}>
      <div data-aos="flip-left" className="footer py-5" style={{overflowX:"hidden"}}>
        <div className="container" style={{overflowX:"hidden"}}>
          <div className="row" style={{overflowX:"hidden"}}>
            <div className="col-md-12 text-center">
              <a href="" className="footer-link">
                Register
              </a>
              <a href="" className="footer-link">
                Forum
              </a>
              <a href="" className="footer-link">
                Affiliate
              </a>
              <a href="" className="footer-link">
                FAQ
              </a>
              <div className="footer-social pt-4 text-center">
                <a href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a href="">
                  <i className="fab fa-dribbble"></i>
                </a>
                <a href="">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="footer-copy">
                <div className="copy-right text-center pt-5">
                  <p className="text-light">
                    &copy; 2022. Foodies-OZ. All rights Reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
