import { Component, OnInit } from '@angular/core';

interface Country {
  name: string;
  code: string;
  validator: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  inputValue: string = '';

  countries: Country[] = [
    { name: 'India', code: '+91', validator: '^[0-9]{10}$' },
    { name: 'USA', code: '+1', validator: '^\\([0-9]{3}\\) [0-9]{3}-[0-9]{4}$' }
  ];
  selectedCountry: Country = this.countries[1];

  ngOnInit() {
  }

  selectCountry(country: Country) {
    this.selectedCountry = country;
  }

  verifyPhoneNumber() {
    const inputValue = this.inputValue;
    const validator = this.selectedCountry.validator;

    if (validator) {
      const regex = new RegExp(validator);

      if (!regex.test(inputValue)) {
        alert('Invalid phone number');
      } else {
        alert('Phone number is valid');
      }
    }
  }
}