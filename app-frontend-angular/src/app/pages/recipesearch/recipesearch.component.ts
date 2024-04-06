import { Component } from '@angular/core';
import { RecipesearchService } from '../../services/recipesearch.service';
import { Recipe } from '../../interfaces/recipe'; 
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoggedInUser } from '../../interfaces/loggedinuser';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';


@Component({
  selector: 'app-recipesearch',
  standalone: true,
  imports: [FormsModule, AsyncPipe, CommonModule],
  templateUrl: './recipesearch.component.html',
  styleUrl: './recipesearch.component.css'
})

export class RecipesearchComponent {
  recipes?: any;
  loggedIn$: Observable<LoggedInUser>;
  showAllRecipes = false;
  initialDisplayCount = 6;
  isMenuOpen: boolean = false;

  searchterm = "";
  mealType!: string;
  health!: string;

  constructor(private recipesearchService: RecipesearchService, private auth: AuthService, private elementRef: ElementRef) {
    this.loggedIn$ = this.auth.loggedIn$;
  }

  searchRecipe() {

  this.recipesearchService.getRecipes(this.searchterm, this.mealType, this.health).subscribe(res=> {
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
        length: item.recipe.ingredientLines.length,
      }
    });
    console.table(recipes);
    this.recipes = recipes;
   // Scroll to the anchor on the same page
    const element = this.elementRef.nativeElement.querySelector('#recipesContainer');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  })
  }

  toggleRecipesVisibility() {
    this.showAllRecipes = true;
  }

  getDisplayedRecipes() {
    return this.showAllRecipes ? this.recipes : (this.recipes ? this.recipes.slice(0, this.initialDisplayCount) : []);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}