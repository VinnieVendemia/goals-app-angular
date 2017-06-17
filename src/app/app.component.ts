import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Goals App';
  goal: Goal = {
  	id: 1,
  	title: 'Goal 1'
  }
}

export class Goal {
  id: number;
  title: string;
}