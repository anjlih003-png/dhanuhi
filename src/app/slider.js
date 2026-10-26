'use client';

import { Carousel } from "react-bootstrap";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

// import your banner images
import Banner1 from "../../public/images/banner1.webp";
import Banner2 from "../../public/images/banner.webp";
import Banner3 from "../../public/images/banner2.png";

export default function Slider() {
  return (
    <>
      <Carousel slide interval={3000} controls indicators>
        {/* 🔹 Banner 1 */}
        <Carousel.Item>
          <Image
            src={Banner1}
            alt="Premium Dry Fruits Banner"
            className="img-fluid w-100"
            priority
          />
          {/* <Carousel.Caption>
            <h3>Premium Dry Fruits Collection</h3>
            <p>Fresh | Handpicked | Wholesome</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        {/* 🔹 Banner 2 */}
        <Carousel.Item>
          <Image
            src={Banner2}
            alt="Dhanuhi Banner"
            className="img-fluid w-100"
          />
        </Carousel.Item>

        {/* 🔹 Banner 3 */}
        <Carousel.Item>
          <Image
            src={Banner3}
            alt="Healthy Nuts & Dry Fruits"
            className="d-block w-100"
          />
          {/* <Carousel.Caption>
            <h3>Healthy & Delicious</h3>
            <p>Shop cashews, almonds, raisins & more</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </>
  );
}