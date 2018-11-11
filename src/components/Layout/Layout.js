import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar';
const Layout = (props) => (
    <Aux>
    <ToolBar />
    <div className={classes.Content}>
        {props.children}
    </div>
    </Aux>
)

export default Layout;


