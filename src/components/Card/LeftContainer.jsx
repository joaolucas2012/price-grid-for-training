import React from "react";
import { useNavigate } from "react-router-dom";

import "../UI/LeftContainer.css";

import Button from "./Button";

const HalfContainer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className="left-container lightseagreen__background">
      <div className="left-space">
        <p className="lightcyan">Monthly Subscription</p>
        <div id="monthly-price">
          <h2 className="inline">$29</h2>
          <p
            className="
            font-13 
            mediumturquoise
            inline"
          >
            per month
          </p>
        </div>
        <p id="access" className="font-13 lightcyan">Full access for less than $1 a day</p>
        <Button type="button" onClick={handleButtonClick}>
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default HalfContainer;
