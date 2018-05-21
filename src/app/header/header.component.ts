import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() linkClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onRecipesLinkClicked() {
    this.linkClicked.emit('recipes');
  }

  onShoppingLinkClicked() {
    this.linkClicked.emit('shoppingList');
  }

}
