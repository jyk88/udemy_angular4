import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'fried chicken',
      'yummy dead animals!',
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg'
    ),
    new Recipe(
      'kale salad',
      'super healthy!',
      'https://cookieandkate.com/images/2012/11/kale-salad-with-apple-goat-cheese-and-pecans-0.jpg'
    )
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
