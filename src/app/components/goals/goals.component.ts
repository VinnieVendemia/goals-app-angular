// Import Angular components 
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

// Import App Components
import { Goal } from '../../models/goal';
import { GoalService } from '../../services/goal.service'

@Component({
  selector: 'my-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css'],
  providers: [GoalService]
})

export class GoalsComponent implements OnInit {
  title = 'Goals App';
  goals: Goal[];
  selectedGoal: Goal;

  onSelect(goal: Goal): void {
    this.selectedGoal = goal;
  }

  constructor(private goalService: GoalService) {}

  getGoals(): void {
    this.goalService.getGoals().then(goals => this.goals = goals);
  }

  ngOnInit(): void {
    this.getGoals();
  }

}