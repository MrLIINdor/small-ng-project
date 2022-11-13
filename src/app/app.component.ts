import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  styles:[`.active {color: white}`],
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
