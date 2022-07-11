import React from "react";
import {
  Container,
  LeftSpace,
  LightSeanP,
  MonthlyPrice,
  InlineH2,
  MediumturquoiseP,
  AccessP,
} from "./styles";
import { useNavigate } from "react-router-dom";

import Button from "../Button";

const LeftContainer = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <LeftSpace>
        <LightSeanP>Monthly Subscription</LightSeanP>
        <MonthlyPrice>
          <InlineH2>$29</InlineH2>
          <MediumturquoiseP>per month</MediumturquoiseP>
        </MonthlyPrice>
        <AccessP>
          Full access for less than $1 a day
        </AccessP>
        <Button type="button" onClick={handleButtonClick}>
          Sign Up
        </Button>
      </LeftSpace>
    </Container>
  );
};

export default LeftContainer;
