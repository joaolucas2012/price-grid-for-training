import React from "react";

import "./Card.css";

import Text from "./Text"
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
            <Text className="green">
              30-day, hassle-free money back guarantee
            </Text>
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
        <div>
          <HalfContainer className="lightseagreen">
            <Title className="left-text">Monthly Subscription</Title>
          </HalfContainer>
          <HalfContainer className="mediumturquoise">
            <Title>Why Us?</Title>
          </HalfContainer>
        </div>
      </div>
    </div>
  );
};

export default Card;
