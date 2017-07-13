import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Goal } from '../models/goal'

@Injectable()
export class GoalService {

  private goalsUrl = 'api/goals';  // URL to web api

  constructor(private http: Http) { }

	getGoals(): Promise<Goal[]> {
    return this.http.get(this.goalsUrl)
      .toPromise()
      .then(response => response.json().data as Goal[])
      .catch(this.handleError)
	}

	getGoal(id: number): Promise<Goal> {
	  const url = `${this.goalsUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Goal)
        .catch(this.handleError);
	}

  addGoal(): Promise<String> {
    return Promise.resolve(`Successfully created new goal`);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}