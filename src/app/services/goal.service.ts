import { Injectable } from '@angular/core';
import { Goal } from '../models/goal'
import { GOALS } from '../models/mocks/mock-goals'

@Injectable()
export class GoalService {
	getGoals(): Promise<Goal[]> {
		return Promise.resolve(GOALS);
	}

  addGoal(): Promise<String> {
    return Promise.resolve(`Successfully created new goal`);
  }
}