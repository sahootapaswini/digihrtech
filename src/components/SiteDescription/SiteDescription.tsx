import React from "react";
import "./SiteDescription.css";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const paragraphs = [
  "Your Trusted Technology Partner for HR Digital Transformation, Consulting & Advisory Services.",
  "We are a proud team of certified experts worked previously in Big4 with a well-documented history of delivering high-quality projects & Support Services.",
  "Having more than 20 years of experience in doing HR Digital Transformation across industries.",
  "Our HR solutions is tailored for your business.",
  "Simplifying HR complexities, enhancing productivity by our Innovative AI Power HR Solutions.",
  "Digitizing HR by simplifying operation, Empowering Employee, Happy Business.",
];

const SiteDescription: React.FC = () => {
  return (
    <Carousel
      controls
      indicators
      interval={3000}
      className="carousel-container mx-auto d-flex align-items-center p-5">
      {paragraphs.map((text, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center align-items-center">
            <h3 className="text-center text-white">{text}</h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default SiteDescription;
