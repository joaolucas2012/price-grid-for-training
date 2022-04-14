import React from "react";

import "./Card.css";

import HalfContainer from "./HalfContainer";
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
          <HalfContainer className="lightseagreen__background">
            <div className="left-space">
              <p className="lightcyan">Monthly Subscription</p>
              <div id="monthly-price">
                <h1 className="inline">$29</h1>
                <p className="font-13 mediumturquoise inline">per month</p>
              </div>
              <p className="font-13 lightcyan">
                Full access for less than $1 a day
              </p>
            </div>
          </HalfContainer>
          <HalfContainer className="mediumturquoise__background">
            <div className="left-space">
              <p className="lightcyan">Why Us?</p>
              <div id="info">
                <p>Tutorials by industry experts</p>
                <p>Peer and expert code review</p>
                <p>Coding exercises</p>
                <p>Access to our Github repos</p>
                <p>Community forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
              </div>
            </div>
          </HalfContainer>
        </div>
      </div>
    </div>
  );
};

export default Card;
