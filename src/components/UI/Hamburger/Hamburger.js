import React from 'react';
import classes from './Hamburger.css';
const hamburger = (props) => {
    return (
        <div className={classes.hamburger} onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default hamburger;