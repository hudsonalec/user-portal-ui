import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ClientMessage } from 'src/app/models/client-message';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
}) // this class will call the UserService and fetch all Users from the SpringBoot Api which fetches it from the DB
export class AllComponent implements OnInit {

  title = 'All Users'
  public users: User[] = [];

  public clientMessage: ClientMessage = new ClientMessage('Sorry no users to display');

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // as SOON as the component is initialized we want to invoke the findAllUsers() method
    this.findAllUsers(); // immediately populate the array!
  }

  findAllUsers() {

    this.userService.findAllUsers()
      .subscribe(data=> {
        //this.userService.findAllUsers() returns a User[]
        this.users = data;
      })
  }

}
