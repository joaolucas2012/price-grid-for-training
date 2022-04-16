import React from 'react';

import "../UI/RightContainer.css";

const RightContainer = () => {
    return ( 
        <div className="right-container mediumturquoise__background">
            <div className="left-space">
              <p id="why" className="lightcyan">Why Us?</p>
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
          </div>
     );
}
 
export default RightContainer;