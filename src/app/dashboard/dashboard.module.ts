import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './app.dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,

    DashboardRoutingModule
  ]
})
export class DashboardModule { }
