import React from 'react';

import "./GreyText.css";

const GreyText = (props) => {
    return ( 
        <p className="grey">{props.children}</p>
     );
}
 
export default GreyText;