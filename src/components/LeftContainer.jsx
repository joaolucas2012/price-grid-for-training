import React from "react";

import "./LeftContainer.css";

import Button from "./Button";

const HalfContainer = () => {
  return (
    <div className="left-container lightseagreen__background">
      <div className="left-space">
        <p className="lightcyan">Monthly Subscription</p>
        <div id="monthly-price">
          <h1 className="inline">$29</h1>
          <p
            className="
            font-13 
            mediumturquoise
            inline"
          >
            per month
          </p>
        </div>
        <p className="font-13 lightcyan">Full access for less than $1 a day</p>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default HalfContainer;
