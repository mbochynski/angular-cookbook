import { Component, OnInit, Output, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';
import * as fromShoppingList from '../store/shopping-list.reducers';

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

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<fromShoppingList.AppState>) {}

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

  onFormSubmit(form: NgForm) {
    const { name, amount } = form.value;
    const newIngredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.store.dispatch(new ShoppingListActions.UpdateIngredient({
        index: this.editedItemIndex, 
        ingredient: newIngredient
      }));
    } else {
      this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
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
      this.store.dispatch(new ShoppingListActions.DeleteIngredient(this.editedItemIndex));
    }
    this.slForm.reset();
    this.editMode = false;
  }

}
