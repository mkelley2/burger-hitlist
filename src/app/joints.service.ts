import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JointsService {

  constructor(private http: Http) { }

  getAllJoints(zip) {
    return this.http.get('/api/'+zip)
      .map(res => res.json());
  }

}
