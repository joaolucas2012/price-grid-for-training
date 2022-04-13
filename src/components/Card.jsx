import React from "react";

import "./Card.css";

import GreyText from "./GreyText";
import Header from "./Header.jsx";

const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <div id="card-top">
          <Header />
          <div className="left-text">
            <p className="green">30-day, hassle free money back guarantee</p>
          </div>
          <div className="left-text">
            <GreyText>
              Gain access to our full library of tutorials along with expert
              code reviews.
            </GreyText>
            <GreyText>
              Perfect for any developers who are serious about honing their
              skills.
            </GreyText>
          </div>
        </div>
        <div id="card-bottom">
          <div className="monthly-subscription">
            <p>Monthly Subscription</p>
          </div>
          <div className="why-us">
            <p>Why Us?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
