import React from 'react';

import "../UI/Button.css";

const Button = (props) => {
    return ( 
        <button className="btn">{props.children}</button>
     );
}
 
export default Button;