import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RouteWizard';

  constructor(private location: Location, private router: Router) { }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }

  redirectToHome(): void {

    //in this case it is mandatory to have page refresh method1 without refershing i will change the route but will stuck on same page
    // this.location.go('/home');
    // this.location.replaceState('/home');
    // window.location.reload();

    //method 2
    // this.router.navigateByUrl('/home');

    //method 3 to achieve same feture with location
    const path = '/home';
    const state = {};

    this.router.navigateByUrl(path, { skipLocationChange: true }).then(() => {
      this.location.go(path, '', state);
    });
  }
}
