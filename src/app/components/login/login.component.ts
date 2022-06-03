import { AppComponent } from './../../app.component';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  loginErrMessage: string = '';
  isLoading: boolean = false; // look into Angular Material for loading animations

  // we're injecting the AppComponent as a dependency so we can toggle its properties
  constructor(private authService: AuthService, private appComponent: AppComponent) { }

  // call on a service to take in the username and password and
  // send them to the /login endpoint of our server

  login() {

    // first check for empty value
    if (!this.username.trim() || !this.password.trim()) {

      this.loginErrMessage = 'Failed to login';
      return;

    }
    // call the authentication service to hit the /login endpoint
    this.isLoading = true; // we'll change this back to false after the data is returned
    this.loginErrMessage = ''; // resets the error message to blank
    this.authService.login(this.username, this.password)
      .subscribe(
        (data) => { // returns the USER object that the login controller method returns if successful
          this.isLoading = false;

          // build a token that we capture from the respone's headers (sent back from Spring)
          const token = data.headers.get('portal-token'); // grab the value of the token generated
          // running snapshot of who's logged in
          sessionStorage.setItem('token', token); // so now we have acknowledged that the user is authenticated

          // set the isLoggedIn value in the app.component.ts to true
          this.appComponent.isLoggedIn = true;

          // updateUser data

        },
        // what to do if it isn't successful
        () => {

          this.isLoading = false;
          this.loginErrMessage = 'Failed to Login';

        }
      ); // what to do when data is returned? and what to do if there's an error

      // clear the input fields
      this.username = '';
      this.password = '';


  }





}
