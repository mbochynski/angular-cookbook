import * as ShoppingListActions from './shopping-list.actions';
import { Ingredient } from '../../shared/ingredient.model';

export interface AppState {
  shoppingList: State,
}

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

const initialState = {
  ingredients: [
    new Ingredient('Tomatos', 3),
    new Ingredient('Potatos', 4),
  ],
  editedIngredient: null,
  editedIngredientIndex: null,
};

export function shoppingListReducer(state: State = initialState, action: ShoppingListActions.ShoppingListActions) {

  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload,
        ]
      }
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...action.payload,
        ]
      }
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload.ingredient,
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
      }
    case ShoppingListActions.DELETE_INGREDIENT:
      const deletedIngredients = [...state.ingredients];
      deletedIngredients.splice(state.editedIngredientIndex, 1);
      return {
        ...state,
        ingredients: deletedIngredients,
      }
    case ShoppingListActions.START_EDIT:
      const { index: editedIngredientIndex } = action.payload;
      const editedIngredient = {...state.ingredients[editedIngredientIndex]};
      return {
        ...state,
        editedIngredient,
        editedIngredientIndex,
      }
    default:
      return state;
  }

}
