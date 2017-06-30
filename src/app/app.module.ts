import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './components/app/app.component';
import { GoalDetailComponent } from './components/goal-detail/goal-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GoalDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
