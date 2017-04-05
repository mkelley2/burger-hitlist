import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JointsComponent } from './joints/joints.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'test', component: WelcomeComponent},
  { path: 'joints', component: JointsComponent},
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
