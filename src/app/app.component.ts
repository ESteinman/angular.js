import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  video = {
    title: 'Despacito',
     views: 2,
     liked: true
  }

  handleClick(){
    console.log("Someone clicked the 'Like' button on the template :-)")
  }

   videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
  ]

  isShown: boolean = false
}
