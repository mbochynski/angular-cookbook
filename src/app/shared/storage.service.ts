import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { map } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';

@Injectable()
export class StorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://angularcourse-466aa.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    return this.http.get('https://angularcourse-466aa.firebaseio.com/recipes.json')
      .pipe(
        map((response: Response) => {
          const recipes: Recipe[] = response.json();
          return recipes.map((recipe: Recipe) => {
            if (!recipe.ingredients) {
              recipe.ingredients = [];
            }
            return recipe;
          });
        })
      )
      .subscribe(
        (recipes: Recipe[]) => { 
          this.recipeService.setRecipes(recipes);
        },
        (error) => { console.log('error', error); }
      );
  }

}
