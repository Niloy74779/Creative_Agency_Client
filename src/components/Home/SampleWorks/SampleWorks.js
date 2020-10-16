import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../../images/carousel-1.png";
import Carousel2 from "../../../images/carousel-2.png";
import Carousel3 from "../../../images/carousel-3.png";
import Carousel4 from "../../../images/carousel-4.png";
import Carousel5 from "../../../images/carousel-5.png";

import "./SampleWorks.css";

const SampleWorks = () => {
  return (
    <div className="sample-works">
      <h2 className="text-center text-white mb-3">
        Here are some of <span style={{ color: "#7AB259" }}>our works</span>
      </h2>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={Carousel1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={Carousel2}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={Carousel3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={Carousel4}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src={Carousel5}
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default SampleWorks;
