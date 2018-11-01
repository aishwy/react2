import React from 'react';
import Aux from '../../../hoc/Aux'
import { Transform } from 'stream';
const orderSummary = (props) => {
    const ingridientSummary = Object.keys(props.ingridients).map((igkey) =>{
        return (
        <li key={igkey}>
        <span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingridients[igkey]}
        </li> );
    })
return (

    <Aux>
    <h2> Here's what you put together </h2>
    <p>{ingridientSummary}</p>
    <ul>
    </ul>
    <p>Do you wanna order the burger? </p>
    </Aux>
);
}

export default orderSummary;