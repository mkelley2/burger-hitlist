import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JointsComponent } from './joints/joints.component';
import { AppRoutingModule }     from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { JointsService} from './joints.service';
// import { masterYelpKeys } from './secret';
//
// export const masterYelpKeys = {
//   clientId: masterYelpKeys.clientId,
//   clientSecret: masterYelpKeys.clientSecret
// };

@NgModule({
  declarations: [
    AppComponent,
    JointsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [JointsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
