// Angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

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
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
