import { Component, OnInit } from '@angular/core';
import { JointsService} from './../joints.service';
import { UserService } from './../user.service';
import { User } from './../user.model';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-joints',
  templateUrl: './joints.component.html',
  styleUrls: ['./joints.component.css']
})
export class JointsComponent implements OnInit {
  joints: any = [];
  selectedUser;

  constructor(private jointsService: JointsService, private userService: UserService) { }

  ngOnInit() {
    this.selectedUser = this.userService.getUserById("0");
  }

  showLog(){
    this.jointsService.getAllJoints(97204).subscribe(res => {
      this.joints = res;
      console.log(res)
    })
  }


}
