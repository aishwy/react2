import React from 'react';
import classes from './BuildControl.css';
const BuildControl = (props) => {
    var lessDisable="";
    if(props.lessDisable) lessDisable="disable";
    return(
    <div className={classes.BuildControl}>
        <div className={classes.label}> {props.label} </div>
        <button onClick={props.moreClick}> More </button>
        <button disabled={props.disable} onClick={props.lessClick}> Less </button>
    </div>)

}

export default BuildControl;