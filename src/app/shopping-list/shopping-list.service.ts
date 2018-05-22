import { Ingredients } from "../shared/ingredients.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredients[]>();

  private ingredients: Ingredients[] = [
    new Ingredients('Tomatos', 3),
    new Ingredients('Potatos', 4),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addNewItem(name: string, amount: number) {
    this.ingredients.push(new Ingredients(name, amount));
    this.ingredientsChanged.emit(this.getIngredients());
  }

}
