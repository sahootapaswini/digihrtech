import React from "react";

// Define the types for the props
interface CardProps {
  title: string;
  text: string;
  imgSrc: string;
  link: string;
}

// Define the Card component with typed props
const Card: React.FC<CardProps> = ({ title, text, imgSrc, link }) => {
  return (
    <div className="card">
      <img src={imgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <a href={link} className="btn btn-primary">
          Find out more
        </a>
      </div>
    </div>
  );
};

export default Card;
