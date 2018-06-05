import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { RecipesComponent } from "./recipes.component";
import { NoRecipeComponent } from "./no-recipe/no-recipe.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth.guard";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  { path: '', component: RecipesComponent,
    children: [
      { path: '', component: NoRecipeComponent },
      { path: 'new', component: RecipeEditComponent, canActivate: [
        AuthGuard,
      ]},
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent, canActivate: [
        AuthGuard,
      ]},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
