import React from 'react';

interface FillingProps {
  ingredientName: string,
}

const Filling: React.FC<FillingProps> = ({ingredientName}) => {
  return (
      <div className={ingredientName}></div>
  );
};

export default Filling;