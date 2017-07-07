import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';
import { GoalsComponent } from './components/goals/goals.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: GoalDetailComponent
  },
  {
    path: 'goals',
    component: GoalsComponent
  }
]
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}