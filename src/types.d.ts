import meatImage from './assets/5b6a94cc-dee5-4165-b39d-c57b3047afb01667208332587.png';
import baconImage from './assets/6b626fcf-c0eb-48d7-960d-d3a1d0b771431667208334353.png';
import cheeseImage from './assets/c24ac2fb-de6c-493b-9483-b8ee1aedabfb1667208333820.png';
import saladImage from './assets/eacd261f-01ce-47eb-a2ba-4f99a728086b1667208333650.png';

export interface IngredientFilling {
  name: string,
  count: number,
}

export interface Ingredient {
  name: string,
  price: number,
  image: string,
}

export const INGREDIENTS: Ingredient[] = [
  {name: 'Meat', price: 80, image: meatImage},
  {name: 'Cheese', price: 50, image: cheeseImage},
  {name: 'Salad', price: 10, image: saladImage},
  {name: 'Bacon', price: 60, image: baconImage},
];

