import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
 
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
 
// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
 
import { GoalSearchService } from '../../services/goal-search.service';
import { Goal } from '../../models/goal';
 
@Component({
  selector: 'goal-search',
  templateUrl: './goal-search.component.html',
  styleUrls: [ './goal-search.component.css' ],
  providers: [GoalSearchService]
})
export class GoalSearchComponent implements OnInit {
  goals: Observable<Goal[]>;
  private searchTerms = new Subject<string>();
 
  constructor(
    private goalSearchService: GoalSearchService,
    private router: Router) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.goals = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.goalSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Goal[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Goal[]>([]);
      });
  }
 
  gotoDetail(goal: Goal): void {
    let link = ['/detail', goal.id];
    this.router.navigate(link);
  }
}