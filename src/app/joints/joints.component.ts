import { Component, OnInit } from '@angular/core';
import { JointsService} from './../joints.service';

@Component({
  selector: 'app-joints',
  templateUrl: './joints.component.html',
  styleUrls: ['./joints.component.css']
})
export class JointsComponent implements OnInit {
  joints: any = [];

  constructor(private jointsService: JointsService) { }

  ngOnInit() {

  }

  showLog(){
    this.jointsService.getAllJoints(97225).subscribe(res => {
      this.joints = res;
      console.log(res)
    })
  }

}
