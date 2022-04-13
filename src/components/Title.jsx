import React from 'react';

import "./Title.css";

const Title = (props) => {
    return ( 
        <div className="title-style">
            <p>{props.children}</p>
        </div>
     );
}
 
export default Title;