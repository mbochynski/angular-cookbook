import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private recipeService: RecipeService) { }

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
        name: new FormControl(ingredient.name, Validators.required),
        amount: new FormControl(ingredient.amount, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      });
    });

    this.recipeForm = new FormGroup({
      name: new FormControl(name, Validators.required),
      imagePath: new FormControl(imagePath, Validators.required),
      description: new FormControl(description, Validators.required),
      ingredients: new FormArray(ingredientsControls),
    });
  }

  onSubmit() {
    const {
      name,
      description,
      imagePath,
      ingredients,
    } = this.recipeForm.value;
    const newRecipe = new Recipe(
      name,
      description,
      imagePath,
      ingredients,
    );
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
    } else {
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onIngredientDelete(index: number) {
    const ingredientsForm = <FormArray>this.recipeForm.get('ingredients');
    ingredientsForm.removeAt(index);
  }

}
