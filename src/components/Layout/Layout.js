import React from 'react';
import Aux from '../../hoc/Aux';

const Layout = (props) => (
    <Aux>
    <div>ToolBar, SideBar, Backdrop</div>
    <div>
        {props.children}
    </div>
    </Aux>
)

export default Layout;


