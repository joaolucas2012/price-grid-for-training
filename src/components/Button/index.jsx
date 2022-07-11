import React from 'react';

import {GreenButton} from './styles';

const Button = (props) => {
    return ( 
        <GreenButton>{props.children}</GreenButton>
    );
}
 
export default Button;