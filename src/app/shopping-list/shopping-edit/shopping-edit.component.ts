import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() newItemAdded = new EventEmitter<Ingredients>();

  @ViewChild('nameInput') ingredientNameEl: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') ingredientAmountEl: ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
  }

  onFormSubmit(event) {
    event.preventDefault();
    const name = this.ingredientNameEl.nativeElement.value;
    const amount = Number(this.ingredientAmountEl.nativeElement.value);
    this.newItemAdded.emit(
      new Ingredients(name, amount)
    );
  }

}
