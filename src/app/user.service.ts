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

  addUser(): void {
    // this.users[uid] = newUser;
    console.log("addUser ran")
    console.log(this.users)


  }

  getUserById(userId: string) {
    return this.angularFire.database.object('/users/' + userId);
  }

  getUserByUsername(username: string) {
    return this.angularFire.database.object('/users/username/' + username);
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
