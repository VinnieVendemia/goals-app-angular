import { Component } from '@angular/core';
import { Goal } from './goal';

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
      <li *ngFor="let goal of goals" (click)="onSelect(goal)" [class.selected]="goal === selectedGoal">
        <span class="badge">{{goal.id}}</span> {{goal.title}}
      </li>
    </ul>
    <goal-detail [goal]="selectedGoal"></goal-detail>
    `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .goals {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .goals li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .goals li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .goals li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .goals .text {
    position: relative;
    top: -3px;
  }
  .goals .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]
})

export class AppComponent {
  title = 'Goals App';
  goals = GOALS;
  selectedGoal: Goal;

  onSelect(goal: Goal): void {
    this.selectedGoal = goal;
  }

}
