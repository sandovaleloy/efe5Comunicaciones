import React, { useState } from "react";
import "./styles/Main.css";

const Main = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="carousel">
      <button onClick={goToPrevious} className="carousel-button_left ">
        &lt;
      </button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={goToNext} className="carousel-button_rigth">
        &gt;
      </button>
    </div>
  )
};

export default Main;
