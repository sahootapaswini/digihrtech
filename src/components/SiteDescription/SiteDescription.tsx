import React, { useState, useEffect } from "react";
import "./SiteDescription.css";

const paragraphs = [
  "Your Trusted Technology Partner for HR Digital Transformation, Consulting & Advisory Services.",
  "We are a proud team of certified experts worked previously in Big4 with a well-documented history of delivering high-quality projects & Support Services.",
  "Having more than 20 years of experience in doing HR Digital Transformation across industries.",
  "Our HR solutions is tailored for your business.",
  "Simplifying HR complexities, enhancing productivity by our Innovative AI Power HR Solutions.",
  "Digitizing HR by simplifying operation, Empowering Employee, Happy Business.",
];

const SiteDescription: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : paragraphs.length - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < paragraphs.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 20000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main-section">
      <div className="container">
        <div className="row">
          <div className="col-md-1 d-flex">
            <button onClick={handlePrev} className="control-button prev-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="col-md-10 d-flex">
            <div className="slides-wrapper">
              <div
                className="slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {paragraphs.map((text, index) => (
                  <div className="slide" key={index}>
                    <h1>{text}</h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-1 d-flex">
            <button onClick={handleNext} className="control-button next-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDescription;
