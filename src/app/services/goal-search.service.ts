import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Goal }           from '../models/goal';
 
@Injectable()
export class GoalSearchService {
 
  constructor(private http: Http) {}
 
  search(term: string): Observable<Goal[]> {
    return this.http
               .get(`api/goals/?title=${term}`)
               .map(response => response.json().data as Goal[]);
  }
}