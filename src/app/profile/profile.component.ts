import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  location: any;

  constructor(private http: HttpClient) { }

  getLocation(){
    this.locationData().subscribe((response) =>{
      this.location = response
    })
  };

  locationData() {
    return this.http.get('https://ipapi.co/json/');
  }

  ngOnInit(): void {
    
  }
}