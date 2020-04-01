import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-diagrams',
  templateUrl: './diagrams.component.html'
})
export class DiagramsComponent implements OnInit {
  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    if (this.location.path() === '/diagrams') {
      this.router.navigate(['diagrams', 'sections']);
    }
  }
}
