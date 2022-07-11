import React from "react";

import { Container, MainCard, CardTop, CardBottom, GreenP, LeftText } from "./styles";

import RightContainer from "../RightContainer"
import LeftContainer from "../LeftContainer";
import GreyP from "../GreyP";
import Header from "../Header";

const Card = () => {
  return (
    <Container>
      <MainCard>
        <CardTop>
          <Header />
          <LeftText>
            <GreenP>30-day, hassle-free money back guarantee</GreenP>
          </LeftText>
          <LeftText>
            <GreyP>
              Gain access to our full library of tutorials along with expert
              code reviews.
            </GreyP>
            <GreyP>
              Perfect for any developers who are serious about honing their
              skills.
            </GreyP>
          </LeftText>
        </CardTop>
        <CardBottom>
          <LeftContainer />
          <RightContainer />
        </CardBottom>
      </MainCard>
    </Container>
  );
};

export default Card;
