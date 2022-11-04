import React from 'react';
import ButtonIMG from "../Button/ButtonIMG";
import ButtonDelete from "../Button/ButtonDelete";
import {INGREDIENTS} from "../../types.d";

interface IngredientOptionProps {
  name: string,
  count: number,
  onImgClick: React.MouseEventHandler<HTMLImageElement>,
  del: React.MouseEventHandler<HTMLButtonElement>,
}

const IngredientOption: React.FC<IngredientOptionProps> = (props) => {
  const ingredientInfo = INGREDIENTS.find(item => item.name === props.name)!
  return (
    <div className="box" key={props.name}>
      <ButtonIMG ingredientImg={ingredientInfo.image} onImgClick={props.onImgClick}></ButtonIMG>
      <span>{props.name}</span>
      <span>x{props.count}</span>
      <ButtonDelete del={props.del}></ButtonDelete>
    </div>);
};

export default IngredientOption;