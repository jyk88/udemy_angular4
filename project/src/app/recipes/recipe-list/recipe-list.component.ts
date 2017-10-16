import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'fried chicken',
      'yummy dead animals!',
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg'),
    new Recipe(
      'fried chicken',
      'yummy dead animals!',
      'https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Crispy-Fried-Chicken_exps6445_PSG143429D03_05_5b_RMS.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
