import React from 'react';
import classes from './SideDrawer.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../Logo/Logo';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
const SideDrawer = (props) => {
    const classesSideDrawer = [classes.SideDrawer];
    props.open ? classesSideDrawer.push(classes.Open) : classesSideDrawer.push(classes.Close);
    console.log('*',classesSideDrawer);
    return (
        <Aux>
        <Backdrop show={props.open} click={props.closed}/>
        <div className={classesSideDrawer.join(' ')}>
        <Logo />
        <NavigationItems />

        </div>
        </Aux>
    );
}
export default SideDrawer;