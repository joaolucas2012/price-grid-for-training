import React from "react";

import { MainDiv, LeftSpaceDiv, LightcyanP, InfoDiv } from "./styles";

const RightContainer = () => {
  return (
    <MainDiv>
      <LeftSpaceDiv>
        <LightcyanP>Why Us?</LightcyanP>
        <InfoDiv>
          <p>Tutorials by industry experts</p>
          <p>Peer and expert code review</p>
          <p>Coding exercises</p>
          <p>Access to our Github repos</p>
          <p>Community forum</p>
          <p>Flashcard decks</p>
          <p>New videos every week</p>
        </InfoDiv>
      </LeftSpaceDiv>
    </MainDiv>
  );
};

export default RightContainer;
