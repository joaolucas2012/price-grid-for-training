import React from "react";

import "./Card.css";

import RightContainer from "./RightContainer";
import LeftContainer from "./LeftContainer";
import PGrey from "./PGrey";
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
            <PGrey>
              Gain access to our full library of tutorials along with expert
              code reviews.
            </PGrey>
            <PGrey>
              Perfect for any developers who are serious about honing their
              skills.
            </PGrey>
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
