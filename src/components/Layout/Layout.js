import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import ToolBar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import Backdrop from '../UI/Backdrop/Backdrop';
class Layout extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showSideDrawer:false
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
            <Backdrop show={this.state.showSideDrawer} click={this.sideDrawerClosedHandler}/>
            <ToolBar open={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer}/>
            <div className={classes.Content}>
                {this.props.children}
            </div>
            </Aux>
        );
    }
}

export default Layout;


