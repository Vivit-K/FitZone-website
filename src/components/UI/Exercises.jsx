import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extensions from "../../assets/img/extended.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercising</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
            Repudiandae ab est nemo mollitia.
          </p>
        </div>
        {/* ========= exercises ========= */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} />
            </span>
            <div className="exercise__content">
              <h4>Healthy Life</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                illum quidem corporis. Quae, porro repellat?
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={yoga} />
            </span>
            <div className="exercise__content">
              <h4>Increased Flexibility</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                illum quidem corporis. Quae, porro repellat?
              </p>
            </div>
          </div>
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={extensions} />
            </span>
            <div className="exercise__content">
              <h4>Reduced blood pressure</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                illum quidem corporis. Quae, porro repellat?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
