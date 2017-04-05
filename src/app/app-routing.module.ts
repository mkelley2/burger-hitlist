import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JointsComponent } from './joints/joints.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'joints', component: JointsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
