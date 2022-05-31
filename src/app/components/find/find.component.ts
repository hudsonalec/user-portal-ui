import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {

  title = 'Find User By ID'
  // TODO: build a property to capture the user's input
  userId: number = 0;
  public user: User = new User(0, '', '', '', '', '', []); // why public? because we share the data with the template
  public clientMessage: ClientMessage = new ClientMessage(``);

  // inject the user service into this component so we can use it
  constructor(private userService: UserService) { }


  public findUser() {

    // call on a method from the UserSErvice to find the user by ID taken from the template
    // pass through this.userId as a parameter to the service method
    this.userService.findUserById(this.userId) // no semi colon here becuase we need to declare what we do to the data returned
      .subscribe( // takes in one or two functions
        data => {
          this.user = data;
          this.clientMessage.message=''; // to take away error message
        }, // what to do in the case of success!
        () => this.clientMessage.message = `Can't find the User with id ${this.userId}`// what to do in the case of failuer
      )

  }



  // TODO: define the getById() method in the UserService

}
