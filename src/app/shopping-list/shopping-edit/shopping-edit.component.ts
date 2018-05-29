import { Component, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        const { name, amount } = this.editedItem;
        this.slForm.setValue({
          name,
          amount,
        });
      } 
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddIngredient() {
  }

  onFormSubmit(form: NgForm) {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    } else {
      this.shoppingListService.addNewItem(name, amount);
    }
    form.reset();
    this.editMode = false;
  }

  onClearClick() {
    this.slForm.reset();
    this.editMode = false;
  }
  
  onDeleteClick() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.editedItemIndex);
    }
    this.slForm.reset();
    this.editMode = false;
  }

}
