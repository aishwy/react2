import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.css';

const controls = [
    {type:'salad',label:'Salad'},
    {type:'cheese',label:'Cheese'},
    {type:'bacon',label:'Bacon'},
    {type:'meat',label:'Meat'}

];
const BuildControls = (props) => {
    console.log(props.disable);
    return (
    <div className={classes.BuildControls}>
        {   
            controls.map((ctrl)=>{
            return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    moreClick={()=>props.more(ctrl.type)}
                    lessClick={()=>props.less(ctrl.type)}
                    disable={props.disable[ctrl.type]}/>
        })}
        <p className={classes.price}> Price: <strong>{props.price}</strong></p>
        <button 
            onClick={props.ordered}
            className={classes.order} 
            disabled={! props.purchasable}>
            Order Now!
        </button>

    </div>);

    }

export default BuildControls;