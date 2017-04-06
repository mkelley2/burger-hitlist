import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { JointsComponent } from './joints/joints.component';
import { AppRoutingModule }     from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { JointsService} from './joints.service';
import { AuthService } from './providers/auth.service';
import { AngularFireModule} from 'angularfire2';
// import { masterFirebaseConfig } from './api-keys';
import { UserService } from './user.service';


export const firebaseConfig = {
  apiKey: "AIzaSyBX7BnU5CsqpdY36_YI9ECOM_wnTMfg9Q8",
  authDomain: "burgertracker-16841.firebaseapp.com",
  databaseURL: "https://burgertracker-16841.firebaseio.com",
  storageBucket: "burgertracker-16841.appspot.com",
  messagingSenderId: "1005283058376"
};

@NgModule({
  declarations: [
    AppComponent,
    JointsComponent,
    WelcomeComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [JointsService, AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
