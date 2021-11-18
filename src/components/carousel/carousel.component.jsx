import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./carousel.styles.css";

const Carousel = ({ carouselData }) => {
  const [current, setCurrent] = useState(0);
  const length = carouselData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carouselData) || length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {carouselData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="code snippet"
                id={index}
                className="image"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default Carousel;
