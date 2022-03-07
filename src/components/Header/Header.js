import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  let nav = document.querySelector(".navigation-wrap");
  window.onscroll = () => {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  };

  const navbarClose = () => {
    let navBar = document.querySelector(".navbar-collapse.collapse");
    navBar.classList.remove("show");
  };

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg navigation-wrap">
          <div class="container">
            <a class="navbar-brand" href="#home">
              <img src={logo} alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-stream navbar-toggler-icon"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                <li class="nav-item" onClick={navbarClose}>
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item" onClick={navbarClose}>
                  <a class="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li class="nav-item" onClick={navbarClose}>
                  <a class="nav-link" href="#explore-food">
                    Explore Foods
                  </a>
                </li>
                <li class="nav-item" onClick={navbarClose}>
                  <a class="nav-link" href="#testimonial">
                    Reviews
                  </a>
                </li>
                <li class="nav-item" onClick={navbarClose}>
                  <a class="nav-link" href="#faq">
                    FAQ
                  </a>
                </li>
                <li>
                  <button class="main-btn">+88 017 52746973</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section id="home">
        <div class="container-fluid px-0 top-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <h1>Good food choices are good investments.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sequi fugiat illo voluptates asperiores in minus.
                </p>
                <div className="mt-4">
                  <button className="main-btn">
                    Order Now <i class="fa-solid fa-cart-shopping ps-3"></i>
                  </button>
                  <button className="white-btn ms-lg-4 mt-lg-0 mt-4">
                    Order Now <i class="fa-solid fa-angle-right ps-3"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
