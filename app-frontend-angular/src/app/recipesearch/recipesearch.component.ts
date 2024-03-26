import { Component } from '@angular/core';
import { RecipesearchService } from '../services/recipesearch.service';
import { Recipe } from '../interfaces/recipe'; 
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})

export class RecipesearchComponent {
  recipes?: any;

  searchterm = "Chicken";

  constructor(private recipesearchService: RecipesearchService) {}

  searchRecipe() {

  this.recipesearchService.getRecipes(this.searchterm).subscribe(res=> {
    console.log(res);
    let recipeArray: any[];
    recipeArray = res.hits;
    console.log(recipeArray);

    let recipes = recipeArray.map(item => {
      return {
        self: item._links.self.href,
        label: item.recipe.label, 
        image: item.recipe.image, 
        totalTime: item.recipe.totalTime, 
        ingredientLines: item.recipe.ingredientLines,
      }
    });
    console.table(recipes);
    this.recipes = recipes;
  })
  }
}
