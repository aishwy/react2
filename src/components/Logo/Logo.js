import logo from '../../assets/images/logo.png';
import classes from './Logo.css';
import React from 'react';
const Logo = () => (
    <div className={classes.Logo}>
        <img src={logo} />
    </div>
);
export default Logo;