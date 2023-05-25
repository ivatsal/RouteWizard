import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-can-deactivate',
  templateUrl: './can-deactivate.component.html',
  styleUrls: ['./can-deactivate.component.scss']
})
export class CanDeactivateComponent {
  hasUnsavedChanges= true;
  formData!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.formData = 'Data';
  }

  saveChanges(): void {
    this.hasUnsavedChanges = false;
    alert('Changes saved!');
  }
}