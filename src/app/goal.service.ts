import { Injectable } from '@angular/core';
import { Goal } from './goal'
import { GOALS } from './mock-goals'

@Injectable()
export class GoalService {
	getGoals(): Promise<Goal[]> {
		return Promise.resolve(GOALS);
	}
}