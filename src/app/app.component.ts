import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RouteWizard';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }

  redirectToHome(): void {
    this.location.go('/home');
    this.location.replaceState
  }
}
