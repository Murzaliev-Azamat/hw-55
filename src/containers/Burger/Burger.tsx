import React from 'react';
import './Burger.css';
import Filling from "../../components/Filling/Filling";
import {IngredientFilling} from "../../types.d";


interface BurgerProps {
  ingredients: IngredientFilling[],
}

const Burger: React.FC<BurgerProps> = (props) => {
  const components = [];

  for (const ingredient of props.ingredients) {
    for (let i = 0; i < ingredient.count; i++) {
      components.push(<Filling key={ingredient.name + i} ingredientName={ingredient.name}/>);
    }
  }

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>
      {components}
      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;