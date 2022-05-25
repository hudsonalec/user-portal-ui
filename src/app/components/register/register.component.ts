import { Address } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ClientMessge } from 'src/app/models/client-message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  title = 'Register User';
  public user = new User(0, '', '', '', '', '', []);
  public address = new Address('', '', '', '', '');
  clientMessage = new ClientMessge('');


  // Step 1. Capture the user info from the form, and build a user object

  // Step 2. Send a POST request to the Spring Boot API with the user object in the Request Body
  // ( We need HttpService for this)

  constructor() { }

  public registerUser(): void {

    // call upon a service to transmit the object via a HTTP to a backend API
  }



}
