import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-can-resolve',
  templateUrl: './can-resolve.component.html',
  styleUrls: ['./can-resolve.component.scss']
})
export class CanResolveComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      ({ vatsal }) => {
       
        console.log(vatsal);
      });
  }
}

export function customResolve() {
  return 'Resolved data';
}