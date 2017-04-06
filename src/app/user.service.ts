import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class UserService {

  users: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.users = angularFire.database.list('users');
  }

  getUsers() {
    return this.users;
  }

  removeUser(userToRemove): void {
    var userEntryInDatabase = this.getUserById(userToRemove.$key);
    userEntryInDatabase.remove();
  }

  addUser(email): void {
    // this.users[uid] = newUser;
    console.log("addUser ran");
    this.users.push({
      "username":email,
      "visited":[""],
      "favorites":[""],
      "wishlist":[""],
      "zipcodes":[""]
    })


  }

  getUserById(userId: string) {
    return this.angularFire.database.object('/users/' + userId);
  }

  getUserByUsername(user: string) {
    console.log(user)
    return this.angularFire.database.list('/users/',{
      query:{
        orderByChild:'username',
        equalTo: user
      }
    })

  }

  updateUser(userToEdit) {
    var userEntryInDatabase = this.getUserById(userToEdit.$key);
    userEntryInDatabase.update({ username: userToEdit.username,
                                favorites: userToEdit.favorites,
                                wishlist: userToEdit.wishlist,
                                visited: userToEdit.visited,
                                zipcodes: userToEdit.zipcodes
                              });
  }

}
