import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
