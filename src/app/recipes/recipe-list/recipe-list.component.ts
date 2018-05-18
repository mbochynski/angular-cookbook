import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Apple pie', 'Some delicious apple pie', 'https://images.unsplash.com/photo-1481130797134-0c0b917e6caa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=564db24c53bf70fbdd1b3c2a5338d304&auto=format&fit=crop&w=400&q=60'),
    new Recipe('Some other pie', 'Some delicious apple pie', 'https://images.unsplash.com/photo-1481130797134-0c0b917e6caa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=564db24c53bf70fbdd1b3c2a5338d304&auto=format&fit=crop&w=400&q=60'),
  ];

  constructor() { }

  ngOnInit() {
  }

}
