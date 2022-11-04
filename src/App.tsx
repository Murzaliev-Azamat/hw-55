import React, {useState} from 'react';
import './App.css';
import Burger from "./containers/Burger/Burger";
import IngredientOption from "./components/IngredientOption/IngredientOption";


interface IngredientFilling {
  name: string,
  count: number,
}

function App() {


  const [ingredients, setIngredients] = useState<IngredientFilling[]>([
    {name: "Salad", count: 3},
    {name: "Meat", count: 4},
    {name: "Cheese", count: 3},
    {name: "Bacon", count: 3},
  ]);

  const addFilling = (name: string) => {
    const ingredientsCopy = [...ingredients];
    const ingredientInfo = ingredientsCopy.find(item => item.name === name)!

    ingredientInfo.count++;

    setIngredients(ingredientsCopy)

  };


  return (
    <div className="App">
      <div className="ingredients-style">
        {ingredients.map(ingredient => {
          return (
            <IngredientOption key={ingredient.name} name={ingredient.name} count={ingredient.count} onImgClick={() => addFilling(ingredient.name)} del={() => {}}/>
        )})}
      </div>
      <Burger ingredients={ingredients}/>
    </div>
  );
}

export default App;
