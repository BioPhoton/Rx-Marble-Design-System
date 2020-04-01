import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-beyond-the-standard',
  templateUrl: './beyond-the-standard.component.html'
})
export class BeyondTheStandardComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {
    if (this.location.path() === '/beyond-the-standard') {
      this.router.navigate(['beyond-the-standard', 'alternative-shape']);
    }
  }

}
