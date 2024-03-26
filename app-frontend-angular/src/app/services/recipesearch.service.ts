import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesearchService {
  private baseUrl = 'https://api.edamam.com/api/recipes/v2?type=public';
  private app_key = '06694425b18617c3c76bf61a8b49f925';
  private app_id = 'f77012b4';

  private httpOptions = {
    headers: new HttpHeaders({
      'accept': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) {}

  getRecipes(searchterm: string): Observable<any> {
    let cuisineType = "British";
    let mealType = "Dinner";
    let url = this.baseUrl + "&q=" + searchterm + "&app_id=" + this.app_id + "&app_key=" + this.app_key + "&cuisineType=" + cuisineType + "&mealType=" + mealType;
    return this.http.get<any[]>(url, this.httpOptions);  
  }
}
