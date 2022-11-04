import React from 'react';

interface ButtonImgProps {
  onImgClick: React.MouseEventHandler<HTMLImageElement>,
  ingredientImg: string,
}

const ButtonIMG: React.FC<ButtonImgProps> = props => {
  return (
    <img onClick={props.onImgClick} style={{border: '1px solid red'}} width="50px" height="50px" src={props.ingredientImg} alt="meat"/>
  );
};

export default ButtonIMG;