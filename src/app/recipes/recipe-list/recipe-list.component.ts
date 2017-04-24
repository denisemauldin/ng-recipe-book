import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
       new Recipe('Thai Cashew Chicken',
                      'Thai Chicken stir-fry with cashew nuts and bell peppers',
                      'http://rasamalaysia.com/wp-content/uploads/2017/03/thai-cashew-chicken.jpg',
                   []),
       new Recipe('Cheesy Brat Casserole',
                  'Bratwurst, potatoes, and green beans star in this simple cheddar casserole.',
                  'http://images.meredith.com/bhg/images/recipe/p_R139542.jpg',
                  []),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
