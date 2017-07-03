// Angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

// Application Components
import { AppComponent } from './components/app/app.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { GoalsComponent } from './components/goals/goals.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailComponent,
    GoalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'goals',
        component: GoalsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
