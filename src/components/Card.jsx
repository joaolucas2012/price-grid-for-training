import React from "react";

import "./Card.css";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import Header from "./Header";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div id="card-top">
          <Header />
          <div className="left-text">
            <p className="green">30-day, hassle-free money back guarantee</p>
          </div>
          <div className="left-text">
            <p className="font-13 grey">
              Gain access to our full library of tutorials along with expert
              code reviews.
            </p>
            <p className="font-13 grey">
              Perfect for any developers who are serious about honing their
              skills.
            </p>
          </div>
        </div>
        <div className="card-bottom">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    </div>
  );
};

export default Card;
