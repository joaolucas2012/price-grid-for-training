import React from "react";

import "./Card.css";

import HalfContainer from "./HalfContainer";
import Title from "./Title";
import GreyText from "./GreyText";
import Header from "./Header";

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
        <div className="card-bottom">
          <HalfContainer>
            <Title>Monthly Subscription</Title>
          </HalfContainer>
          <HalfContainer>
            <Title>Why Us?</Title>
          </HalfContainer>
        </div>
      </div>
    </div>
  );
};

export default Card;
