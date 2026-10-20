import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Events } from './events/events';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login , Events],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Learn');
}
