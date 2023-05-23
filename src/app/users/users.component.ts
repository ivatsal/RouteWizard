import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit{
  userType!: string;
  filteredDataSource!: any[];

  userData = [
    {
      userType: 'customer',
      name: 'John Smith',
      email: 'johnsmith@example.com',
      phone: '+1 555-123-4567'
    },
    {
      userType: 'vendor',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      phone: '+1 555-987-6543'
    },
    {
      userType: 'customer',
      name: 'Michael Johnson',
      email: 'michaeljohnson@example.com',
      phone: '+1 555-456-7890'
    },
    {
      userType: 'vendor',
      name: 'Emily Davis',
      email: 'emilydavis@example.com',
      phone: '+1 555-321-6540'
    },
    {
      userType: 'customer',
      name: 'Sarah Anderson',
      email: 'sarahanderson@example.com',
      phone: '+1 555-890-1234'
    },
    {
      userType: 'vendor',
      name: 'David Wilson',
      email: 'davidwilson@example.com',
      phone: '+1 555-234-5678'
    },
    {
      userType: 'customer',
      name: 'Jennifer Lee',
      email: 'jenniferlee@example.com',
      phone: '+1 555-567-8901'
    },
    {
      userType: 'vendor',
      name: 'Matthew Taylor',
      email: 'matthewtaylor@example.com',
      phone: '+1 555-876-5432'
    },
    {
      userType: 'customer',
      name: 'Emma Johnson',
      email: 'emmajohnson@example.com',
      phone: '+1 555-543-2109'
    },
    {
      userType: 'vendor',
      name: 'Olivia Martinez',
      email: 'oliviamartinez@example.com',
      phone: '+1 555-789-0123'
    },
    {
      userType: 'customer',
      name: 'Daniel Clark',
      email: 'danielclark@example.com',
      phone: '+1 555-210-9876'
    },
    {
      userType: 'vendor',
      name: 'Sophia Rodriguez',
      email: 'sophiarodriguez@example.com',
      phone: '+1 555-012-3456'
    },
    {
      userType: 'customer',
      name: 'William Moore',
      email: 'williammoore@example.com',
      phone: '+1 555-456-7890'
    },
    {
      userType: 'vendor',
      name: 'Ava Nelson',
      email: 'avanelson@example.com',
      phone: '+1 555-678-9012'
    },
    {
      userType: 'customer',
      name: 'James Davis',
      email: 'jamesdavis@example.com',
      phone: '+1 555-890-1234'
    },
    {
      userType: 'vendor',
      name: 'Isabella Thomas',
      email: 'isabellathomas@example.com',
      phone: '+1 555-234-5678'
    }
  ];
  displayedColumns: string[] = ['no', 'userType', 'name', 'email', 'phone'];
  dataSource = new MatTableDataSource(this.userData);

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userType = params['userType'] || 'all';
      this.filteredDataSource = this.filterDataByUserType();
    });
    this.route.data.subscribe(data => {
      console.log("data", data)
    })
  }

  filterDataByUserType(): any[] {
    if (this.userType === 'all') {
      return this.userData;
    } else {
      return this.userData.filter(user => user.userType === this.userType);
    }
  }
}
