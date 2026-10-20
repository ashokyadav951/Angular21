import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-events',
  imports: [],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {

  count = signal(0) 
 increment(){
  this.count.update( (c) => 
   c +1
  )
 }
  
  countsimple = 0;
  incrementsimple() {
    this.countsimple++;
  }


  showEvent(event: any) {
    console.log(event);
  }

  username: string = 'ASHOk';
  updateUsername(value: any) {
    this.username = value;
  }

  handleFormSubmit(e:any){
      e.preventDefault();
      console.log("Form Submitt");
      
  }


}
