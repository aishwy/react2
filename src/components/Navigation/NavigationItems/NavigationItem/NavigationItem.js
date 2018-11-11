import React from 'react';
import classes from './NavigationItem.css';
const NavigationItem = (props) => {
    return(
    <li className={classes.NavigationItem} 
    style={{'padding':props.padding}}>
    <a className={props.active ? classes.active:null } href={props.link}>
        {props.children}
    </a>
    </li>
    );
}
export default NavigationItem;