import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Note the correct property name here
})
export class DashboardComponent implements OnInit {
  userEmail: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve user email from route parameters
    this.route.paramMap.subscribe(params => {
      // Retrieve the email parameter from the route
      this.userEmail = params.get('email') || '';
    });
  }
}

