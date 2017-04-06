import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { UserService } from './user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private isLoggedIn: Boolean;
  private user_ID: String;
  private user_displayName: String;
  private user_email: String;
  private auth: any;

  constructor(public userService: UserService, public authService: AuthService, private router: Router) {
    this.authService.af.auth.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          // console.log(auth.google);
          this.userService.getUsers().subscribe(res=>{});
            // var foundUser = false;
            // var userKeys = Object.keys(res);
            // console.log(res);
          //   for(var i = 0; i<res.length;i++){
          //     console.log(res[i].$key);
          //     if (res[i].$key == auth.google.uid) {
          //       foundUser = true;
          //       break;
          //     }
          //   }
          //   if(foundUser){
          //     console.log("found key");
          //     this.user_ID = auth.google.uid;
          //   }else{
          //     console.log("register");
          //     var newUser = {
          //       "username":auth.google.email,
          //       "favorites": [""],
          //       "visited": [""],
          //       "wishlist": [""],
          //       "zipcodes": [""]
          //     }
          //     console.log("sim new User")
          //   }
          // })
          this.userService.addUser();
          this.isLoggedIn = true;
          this.user_displayName = auth.google.displayName;
          this.user_email = auth.google.email;
          console.log("Logged in");

        }
      }
    );

  }
}
