import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
const Layout = (props) => (
    <Aux>
    <div >ToolBar, SideBar, Backdrop</div>
    <div className={classes.Content}>
        {props.children}
    </div>
    </Aux>
)

export default Layout;


