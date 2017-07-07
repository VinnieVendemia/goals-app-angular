// Angular components 
import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap} from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

// Application Components
import { Goal } from '../../models/goal';
import { GoalService } from '../../services/goal.service';

@Component({
  selector: 'goal-detail',
  templateUrl: './goal-detail.component.html'
})

export class GoalDetailComponent implements OnInit {
	  @Input() goal: Goal

	  constructor(
	  	private goalService: GoalService,
  		private route: ActivatedRoute,
  		private location: Location
		) {}

		ngOnInit(): void {
		  this.route.paramMap
		    .switchMap(
		    	(params: ParamMap) => this.goalService.getGoal(+params.get('id'))
		    ).subscribe(goal => this.goal = goal);
		}

		goBack(): void {
  		this.location.back();
		}
}