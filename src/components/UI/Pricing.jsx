import React from "react";
import "../../styles/pricing.css";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section id="pricing-plan">
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit Ipsum, maxime!
          </p>
        </div>
        <div className="pricing__wrapper">
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Regular member</h2>
              <h2 className="pricing section__title">
                $50 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes weekly
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.06 }}
            className="pricing__item pricing__item-02"
            data-aos="fade-down"
            data-aos-delay="300"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Premium member</h2>
              <h2 className="pricing section__title">
                $100 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes weekly
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1600"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Standard member</h2>
              <h2 className="pricing section__title">
                $70 <span>/month</span>
              </h2>
            </div>
            <div className="services">
              <ul>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Unlimited access
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Customer support
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i class="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  5 classes weekly
                </li>
              </ul>
              <button className="register__btn">Join Now</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
