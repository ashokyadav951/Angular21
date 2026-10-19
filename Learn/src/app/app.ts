import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { SigninComponent } from './signin/signin';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, SigninComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learn');
}
