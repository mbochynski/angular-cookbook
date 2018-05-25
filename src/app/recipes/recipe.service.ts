import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  constructor(private shoppingList: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Apple pie', 
      'Some delicious apple pie', 
      'https://images.unsplash.com/photo-1481130797134-0c0b917e6caa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=564db24c53bf70fbdd1b3c2a5338d304&auto=format&fit=crop&w=400&q=60',
      [
        new Ingredient('Apple', 4),
        new Ingredient('Pie', 1),
      ],
    ),
    new Recipe(
      'Some other pie', 
      'Some delicious apple pie', 
      'https://images.unsplash.com/photo-1481130797134-0c0b917e6caa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=564db24c53bf70fbdd1b3c2a5338d304&auto=format&fit=crop&w=400&q=60',
      [
        new Ingredient('Green apple', 3),
        new Ingredient('Dark pie', 1),
      ],
    ),
  ];

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipeIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingList.addNewItems(recipe.ingredients);
  }
}
