import { Injectable } from '@angular/core';
import { Goal } from '../models/goal'
import { GOALS } from '../models/mocks/mock-goals'

@Injectable()
export class GoalService {
	getGoals(): Promise<Goal[]> {
		return Promise.resolve(GOALS);
	}

	getGoal(id: number): Promise<Goal> {
	  return this.getGoals()
	             .then(goals => goals.find(goal => goal.id === id));
	}

  addGoal(): Promise<String> {
    return Promise.resolve(`Successfully created new goal`);
  }
}