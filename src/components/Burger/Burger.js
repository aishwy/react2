import React from 'react';
import Aux from '../../hoc/Aux'
import BurgerIngridient from './BurgerIngridient/BurgerIngridient';
const Burger = () => {
    console.log("Burger");
return (
    <Aux>
        <BurgerIngridient type="BreadTop" />
        <BurgerIngridient type="Meat" />
        <BurgerIngridient type="Salad" />
<BurgerIngridient type="Cheese" />
<BurgerIngridient type="Bacon" />
<BurgerIngridient type="BreadBottom" />
</Aux>
)
}

export default Burger;