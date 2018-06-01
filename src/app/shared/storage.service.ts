import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';

@Injectable()
export class StorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://angularcourse-466aa.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    return this.http.get('https://angularcourse-466aa.firebaseio.com/recipes.json').subscribe(
      (response: Response) => { 
        const recipes = response.json();
        this.recipeService.setRecipes(recipes);
      },
      (error) => { console.log('error', error); }
    );
  }

}
