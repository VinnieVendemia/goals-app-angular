import { Component } from '@angular/core';

const GOALS: Goal[] = [
  { id: 11, title: 'Goal 1' },
  { id: 12, title: 'Goal 2' },
  { id: 13, title: 'Goal 3' },
  { id: 14, title: 'Goal 4' },
  { id: 15, title: 'Goal 5' },
  { id: 16, title: 'Goal 6' },
  { id: 17, title: 'Goal 7' }
];

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
	  <h1>{{title}}</h1>
    <h2>My Goals</h2>
    <ul class="goals">
      <li *ngFor="let goal of goals">
        <span class="badge">{{goal.id}}</span> {{goal.title}}
      </li>
    </ul>
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