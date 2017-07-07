// Angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';

// Application Components
import { AppComponent } from './components/app/app.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { GoalsComponent } from './components/goals/goals.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GoalService } from './services/goal.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    GoalDetailComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
