import "../../styles/testimonials.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import avatar01 from "../../assets/img/avatar01.png";
import avatar02 from "../../assets/img/avatar02.png";
import avatar03 from "../../assets/img/avatar-03.png";

export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Emma Stone</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  veritatis alias omnis voluptates, ducimus sit laudantium
                  voluptatum necessitatibus fugit odio eum voluptatem asperiores
                  repellendus in vero eius perferendis rem nostrum?
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={avatar02} alt="" />
                </div>
                <h4>Angela Cruz</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugit ad esse ipsam accusamus in, magnam sint vero rerum illum
                  laudantium error minima ipsa optio dolore debitis soluta. Ut,
                  nisi perspiciatis!
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={avatar01} alt="" />
                </div>
                <h4>Mia Fernandes</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Impedit eveniet, veritatis repellendus cumque nemo illum iste
                  vero itaque explicabo corrupti unde animi quidem vitae,
                  asperiores distinctio aliquid tempora atque! Consectetur.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-04">
                  <img src={avatar02} alt="" />
                </div>
                <h4>Sophia Hernandez</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur commodi officiis veritatis, perferendis tempora
                  sit ullam aut enim sapiente voluptates consectetur explicabo
                  dolorem vero iusto.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
