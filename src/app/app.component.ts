import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Kyriakos';

  person ={
    givenName: 'Kyriakos',
    surName: 'Bagakis',
    age: 25,
    email: 'kyrbag@hotmail.gr',
  };
}
