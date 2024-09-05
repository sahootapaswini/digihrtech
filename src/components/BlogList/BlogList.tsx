import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./BlogList.module.css";
import Card from "../ReusableComponents/Card";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import WorkforceManagement from "./components/WorkforceManagement/WorkforceManagement";
// Define the type for the card data
interface CardData {
  title: string;
  text: string;
  imgSrc: string;
  link: string;
  componentName: any;
}
const BlogList: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const navigate = useNavigate();
  const cardData: CardData[] = [
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
    {
      title: "WORKFORCE",
      text: "Mastering EU Time Tracking Regulations with SAP SuccessFactors: A Guide for Employers",
      imgSrc: "/src/assets/images/cards/card.jpg",
      link: "/blogs/workforce-management",
      componentName: <WorkforceManagement />,
    },
  ];
  const handleCardClick = (link: string) => {
    setSelectedCard(link);
    navigate(link);
  };
  return (
    <div className="BlogList">
      <div className="blog-content-wrapper">
        <div className="jumbotron jumbotron-fluid bg-light">
          <div className="container">
            <div className="row py-5">
              <h1 className="display-5">Digital HR Blogs</h1>
              <p className="lead">
                Read about technical know-how, industry insights, and the latest
                buzz about all things SAP SuccessFactors.Stay updated with
                expert opinions, tutorials, and cutting-edge developments in the
                world of SAP SuccessFactors.
              </p>
            </div>
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  {cardData.map((card, index) => (
                    <div className="mb-4 px-4 border-none" key={index}>
                      <Card
                        title={card.title}
                        text={card.text}
                        imgSrc={card.imgSrc}
                        link={card.link}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-md-9">
                <Routes>
                  {cardData.map((card) => (
                    <Route
                      key={card.link}
                      path={`/${card.link}`}
                      element={card.componentName}
                    />
                  ))}
                  <Route
                    path="*"
                    element={<div>{<WorkforceManagement />}</div>}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogList;
