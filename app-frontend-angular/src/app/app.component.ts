import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TastyTreasure';
  // data: any; 

  // formTitle = "";

  // constructor(private http: HttpClient) {
  //   this.http.get('http://localhost:8000/api/form').subscribe((data:any) => {
  //     this.data = data; 
  //     console.log(this.data);
  //   })
  // }

  // onSubmit() {
  //   this.http.post('http://localhost:8000/api/form', {title: this.formTitle}).subscribe((data:any) => {
  //     console.log(data);
  //     this.data.push(data);
  //   })
  // }
}
