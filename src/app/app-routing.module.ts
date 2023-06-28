import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InitiateClaimComponent } from './initiate-claim/initiate-claim.component';
import { ReportsComponent } from './reports/reports.component';
import { WorkQueueComponent } from './work-queue/work-queue.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'initiateClaim', component: InitiateClaimComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'workQueue', component: WorkQueueComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
