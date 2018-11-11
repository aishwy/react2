import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer:true
        };
    }
    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer:true});
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false});
    }
    render() {
        return (
            <Aux>
            <ToolBar/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <div className={classes.Content}>
                {this.props.children}
            </div>
            </Aux>
        );
    }
}

export default Layout;


