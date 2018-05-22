import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Tomatos', 3),
    new Ingredient('Potatos', 4),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addNewItem(name: string, amount: number) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
