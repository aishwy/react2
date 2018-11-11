import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.css';
const NavigationItems = (props) => {
    return(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" padding={props.paddingItem} active>Buger Builder</NavigationItem>
        <NavigationItem link="/" padding={props.paddingItem}>Checkout</NavigationItem>
    </ul>

);
}
export default NavigationItems;