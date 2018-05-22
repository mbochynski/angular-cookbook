import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') ingredientNameEl: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') ingredientAmountEl: ElementRef<HTMLInputElement>;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
  }

  onFormSubmit(event) {
    event.preventDefault();
    const name = this.ingredientNameEl.nativeElement.value;
    const amount = Number(this.ingredientAmountEl.nativeElement.value);
    this.shoppingListService.addNewItem(name, amount);
  }

}
