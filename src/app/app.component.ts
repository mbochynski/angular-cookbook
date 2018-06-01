import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    var config = {
      apiKey: "AIzaSyCFb-62W7fs2CAzbV8V8BlpKEYCjqbPNxQ",
      authDomain: "angularcourse-466aa.firebaseapp.com",
    };
    firebase.initializeApp(config);
  }
}
