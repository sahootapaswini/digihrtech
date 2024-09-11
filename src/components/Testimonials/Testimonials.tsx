import React, { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    company: "Largest Steel Plant, India",
    testimonial:
      "Thanks to the support of DHR Technology, we managed to painlessly move our heavily customized on-premise SAP to a modern, digital, and user-friendly Employee Central solution. This was achieved in only 7 months from kick-off to go-live.",
  },
  {
    company: "Largest Industrial Conglomerates in Kingdom of Saudi Arabia",
    testimonial:
      "Partnering with DHR Technology has been key for our HR transformation. Their expertise and support have been very valuable to us.",
  },
  {
    company: "Middle East Best Islamic Bank, Bahrain",
    testimonial:
      "With the support of DHR Technology, we implemented SAP SuccessFactors full suite within 21 months. Our entire HR setup is now improved, with a strengthened focus on recruiting and onboarding processes in particular.",
  },
  {
    company: "World’s Largest Financial Client",
    testimonial:
      "Not only did we meet our strategic objectives for the project, the organization really appreciated the ease and user-friendliness of the system. Also, payroll is seamless across 10 countries in phase 1 and we love to rollout in other countries as well.",
  },
  {
    company: "American multinational Retail corporation",
    testimonial:
      "With the SAP SuccessFactors solutions we can now break down what employees do on the job and drive their behaviour in the right direction, in line with the company’s strategic goals.",
  },
  {
    company: "World’s Second Largest Top Oil Client",
    testimonial:
      "Transitioning to SAP SuccessFactors has revolutionized our compensation management. What used to be a fragmented and manual system is now a streamlined, strategic process that boosts fairness and efficiency across our international operations.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsCount = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsCount);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonialsCount]);

  return (
    <div className="slideshow bg-light-orange container">
      <div
        className="testimonial-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {testimonials.map((item, index) => (
          <div className="testimonial" key={index}>
            <p className="quote">{item.testimonial}</p>
            <p className="company">— {item.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
