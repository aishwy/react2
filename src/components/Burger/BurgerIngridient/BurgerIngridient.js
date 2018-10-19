import  React,{Component} from 'react';
import classes from './BurgerIngridient.css';
import PropTypes from 'prop-types';

class BurgerIngridient extends Component {
    
    render(){
        
        let ingridient = null;
        
        switch(this.props.type) {
        case("BreadBottom"):
        ingridient=<div className={classes.BreadBottom}></div>;
        break;
        case("BreadTop"):
        ingridient= <div className={classes.BreadTop}></div>;
        break;
        case("meat"):
        ingridient=<div className={classes.Meat}></div>;
        break;
        case("cheese"):
        ingridient=<div className={classes.Cheese}></div>;
        break;
        case("bacon"):
        ingridient=<div className={classes.Bacon}></div>;
        break;
        case("salad"):
        ingridient=<div className={classes.Salad}></div>;
        break;
        default:
        ingridient=null;

    }
    return ingridient;
}
}

BurgerIngridient.propTypes = {
    type: PropTypes.string.isRequired
}
export default BurgerIngridient;