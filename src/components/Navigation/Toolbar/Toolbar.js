import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Hamburger from '../../UI/Hamburger/Hamburger';
const Toolbar = (props) => (
    <header className={classes.Toolbar}>
    
    <Hamburger click={props.open}/>
    <Logo />
    <nav className={classes.navitems}>
        <NavigationItems/>
    </nav>
    
    </header>
);
export default Toolbar;