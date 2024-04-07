// specificrecipe.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipesearchService } from '../../services/recipesearch.service';
import { Recipe } from '../../interfaces/recipe';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-specificrecipe',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './specificrecipe.component.html',
  styleUrls: ['./specificrecipe.component.css']
})
export class SpecificrecipeComponent implements OnInit {
  recipe?: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipesearchService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['self']);
      const self = params['self'];
      this.recipeService.getRecipeBySelf(self).subscribe((recipe: Recipe) => {
        this.recipe = recipe;
      });
    });
  }
}