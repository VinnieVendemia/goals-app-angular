import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
	  <h1>{{title}}</h1>
	  <h2>{{goal.title}} details!</h2>
	  <div><label>id: </label>{{goal.id}}</div>
	  <div>
      <label>Title: </label>
      <input [(ngModel)]="goal.title" placeholder="title">
    </div>
	  `
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