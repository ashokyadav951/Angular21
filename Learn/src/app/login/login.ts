import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
 imageUrl: string = 'https://www.w3schools.com/howto/img_avatar.png';
 isbuttonDisabled = true;
 username: string = 'Mohit';
 isActive = true;
 boxWidth = 100;
 bgColor = 'red';
 count = signal(0);

}
