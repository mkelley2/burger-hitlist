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
    this.userService.getUserById("104173620988963071538").subscribe(res => {this.selectedUser = res;});
  }

  showLog(){
    this.jointsService.getAllJoints(97204).subscribe(res => {
      this.joints = res;
      console.log(res)
    })
  }

  checkUser(joint){
    // console.log(this.selectedUser)
      if(this.selectedUser.favorites && this.selectedUser.favorites.indexOf(joint.id)>=0){
        return "bg-success";
      }else if(this.selectedUser.visited && this.selectedUser.visited.indexOf(joint.id)>=0){
        return "bg-warning";
      }else if(this.selectedUser.wishlist && this.selectedUser.wishlist.indexOf(joint.id)>=0){
        return "bg-info";
      }
  }

  addVisit(joint){
    if(this.selectedUser.visited.indexOf(joint.id)==-1){
      if(this.selectedUser.wishlist.indexOf(joint.id)>=0){
        var pos = this.selectedUser.wishlist.indexOf(joint.id);
        this.selectedUser.wishlist.splice(pos,1);
      }
      this.selectedUser.visited.push(joint.id);
      this.userService.updateUser(this.selectedUser);
    }
  }
  addFavorite(joint){
    if(this.selectedUser.favorites.indexOf(joint.id)==-1){
      this.selectedUser.favorites.push(joint.id);
      this.userService.updateUser(this.selectedUser);
    }
  }
  addWish(joint){
    if(this.selectedUser.wishlist.indexOf(joint.id)==-1){
      this.selectedUser.wishlist.push(joint.id);
      this.userService.updateUser(this.selectedUser);
    }
  }


}
