import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {
  private ingredients: Ingredients[] = [
    new Ingredients('Tomatos', 3),
    new Ingredients('Potatos', 4),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addNewItem(name: string, amount: number) {
    this.ingredients.push(new Ingredients(name, amount));
  }

}
