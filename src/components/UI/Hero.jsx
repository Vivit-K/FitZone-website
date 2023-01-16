import React from "react";
import heroImg from "../../assets/img/gym-02.png";
import dumbellIcon from "../../assets/img/logo-01.png";
import "../../styles/hero.css";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="hero__wrapper">
          {/* =========hero content=========== */}
          <div className="hero__content">
            <h2
              className="section__title"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              Exercise is the key to a{" "}
              <span className="highlights">Healthy </span>
              Life
            </h2>
            <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1900">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />
              Natus unde eum dolore adipisci ratione placeat.
            </p>
            <div
              className="hero__btns"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="2000"
            >
              <button className="register__btn">Get Started</button>
              <button className="watch__btn">
                <span>
                  <i class="ri-play-fill"></i>
                </span>
                Watch Video
              </button>
            </div>
          </div>

          {/* =========hero img=============== */}
          <div className="hero__img">
            <div className="hero__img-wrapper">
              <div className="box-01">
                <div className="box-02">
                  <div className="box-03">
                    <div className="box__img">
                      <img src={heroImg} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="heart__rate"
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span>
                  <i class="ri-heart-pulse-fill"></i>
                </span>
                <h6>127 BPM</h6>
              </div>
              <div
                className="gym__location"
                data-aos="fade-left"
                data-aos-duration="1600"
              >
                <span>
                  <i class="ri-map-pin-fill"></i>
                </span>
                <h5>
                  Find new gym <br />
                  near you
                </h5>
              </div>
              <div
                className="dumble__icon"
                data-aos="fade-down"
                data-aos-duration="1600"
              >
                <img src={dumbellIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
