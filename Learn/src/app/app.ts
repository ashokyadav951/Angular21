import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //protected readonly title = signal('Learn');
  name = 'Angular tutorial';
  isAdmin = true;
  count = 0;
  price = 100;
  isloggedIn = true;
  getuser() {
    return "Ashok";
  };
  title = signal('Angular Learn');
}
