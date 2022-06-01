import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';

@Component({
  selector: 'app-remove',
  templateUrl: './remove.component.html',
  styleUrls: ['./remove.component.css']
})
export class RemoveComponent {

  title = 'Remove User by Id';
  userId: number = 0;
  public clientMessage: ClientMessage = new ClientMessage('');

  // TODO: inject the User Service into this component
  constructor(private userService : UserService) { }


  public removeUser() {

    // this will call the userService removeUserById() method
    this.userService.deleteUserById(this.userId)
      .subscribe(
        // what to do if it's successful
        () => this.clientMessage.message = `Removed user with Id ${this.userId}`,
        // maybe the handleError() method was invoked in the .pipe()
        () => this.clientMessage.message = `Unable to remove user with id ${this.userId}`
      );

  }



}
