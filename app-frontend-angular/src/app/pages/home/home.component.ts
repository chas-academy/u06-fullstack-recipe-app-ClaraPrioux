import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LoggedInUser } from '../../interfaces/loggedinuser';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { RecipesearchService } from '../../services/recipesearch.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  loggedIn$: Observable<LoggedInUser>;
  recipes?: any;
  searchterm = "Popular";
  randomRecipe: any;
  
  constructor(private auth: AuthService, private recipesearchService: RecipesearchService) {
    this.loggedIn$ = this.auth.loggedIn$;
    this.searchRecipe();
  }

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
          url: item.recipe.url,
        }
      });
      console.table(recipes);
      this.recipes = recipes;

    })
    }
  }
