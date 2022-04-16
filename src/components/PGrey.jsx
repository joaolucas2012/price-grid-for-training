import React from 'react';

import "./PGrey.css";

const PGrey = (props) => {
    return ( 
        <p className="p-grey">{props.children}</p>
     );
}
 
export default PGrey;