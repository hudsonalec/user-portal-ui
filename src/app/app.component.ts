import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-portal-ui';

  isLoggedIn: boolean = false;

  username: string = '';

  //updates the user info based on whatever is stored in the session
  updateUserData(username: string): void {
    this.username = username;
  }

  // make a button on the app.component.html to trigger this at the bottom of every component
  signOut(): void {

    window.location.reload();
    // reloading the window clears the session storage and log out the user

  }

}
