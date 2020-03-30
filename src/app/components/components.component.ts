import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-components',
  templateUrl: './components.component.html'
})
export class ComponentsComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    if (this.location.path() === '/components') {
      this.router.navigate(['components', 'overview']);
    }
  }

}
