// Angular Components
import { Component, OnInit } from '@angular/core';

// App Components
import { Goal } from '../../models/goal';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

	goals: Goal[] = [];

	constructor(private goalService: GoalService) { }

	 ngOnInit(): void {
    this.goalService.getGoals()
      .then(goals => this.goals = goals.slice(1, 5));
  }
}