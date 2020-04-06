import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-open-issues',
  templateUrl: './open-issues.component.html'
})
export class OpenIssuesComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (this.location.path() === '/open-issues') {
      this.router.navigate(['open-issues', 'operations-and-their-end']);
    }
  }

}
