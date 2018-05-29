import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  private initForm() {
    let recipe = new Recipe('', '', '', []);
    if (this.editMode) {
      recipe = this.recipeService.getRecipe(this.id);
    }
    const {
      name,
      description,
      imagePath,
      ingredients,
    } = recipe;

    const ingredientsControls = ingredients.map((ingredient) => {
      return new FormGroup({
        name: new FormControl(ingredient.name),
        amount: new FormControl(ingredient.amount),
      });
    });

    this.recipeForm = new FormGroup({
      name: new FormControl(name),
      imagePath: new FormControl(imagePath),
      description: new FormControl(description),
      ingredients: new FormArray(ingredientsControls),
    });
  }

  onSubmit() {
    console.log(this.recipeForm.value);
    
  }

}
