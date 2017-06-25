import { Component, Input} from '@angular/core';
import { Goal } from './goal';

@Component({
  selector: 'goal-detail',
  template: `
  <div *ngIf="goal">
	  <h2>{{goal.title}} details!</h2>
	  <div><label>id: </label>{{goal.id}}</div>
	  <div>
      <label>Title: </label>
      <input [(ngModel)]="goal.title" placeholder="title">
    </div>
  </div>
  `
})

export class GoalDetailComponent {
	  @Input() goal: Goal
}