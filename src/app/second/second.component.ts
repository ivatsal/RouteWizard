import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  displayLodingBar = false;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.displayLodingBar = true;
      }
      if (routerEvent instanceof NavigationEnd
        || routerEvent instanceof NavigationCancel
        || routerEvent instanceof NavigationError) {
        this.displayLodingBar = false;
      }
    });
  }


}
