
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(public authService: AuthService, public userService: UserService, private router:Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.loginWithGoogle().then((data) => {
      console.log(data);
      this.userService.getUsers().subscribe(res=> {
        var foundUser = false;
        res.forEach(elem=>{
          if (data.auth.email === elem.email) {
            foundUser = true;
            console.log("foundUser");
          }
        })
        if (!foundUser){
          this.userService.addUser(data.auth.email);
        }
      })
      this.router.navigate(['']);
    })
  }

}
