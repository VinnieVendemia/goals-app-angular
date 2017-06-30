import { Component, Input} from '@angular/core';
import { Goal } from '../../models/goal';

@Component({
  selector: 'goal-detail',
  templateUrl: './goal-detail.component.html'
})

export class GoalDetailComponent {
	  @Input() goal: Goal
}