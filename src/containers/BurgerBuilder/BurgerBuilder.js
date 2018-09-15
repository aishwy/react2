import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger'
class BurgerBuilder extends Component {
    render() {
        console.log("Burger Builder");
        return (
            
            <Aux>
            <Burger />
            <div>Build Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;