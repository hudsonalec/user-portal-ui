import { AppComponent } from './../../app.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  title = 'User Portal'
  image = "assets/network.png"

  constuctor(public appComponent: AppComponent) {}


}
