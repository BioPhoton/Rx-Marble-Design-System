import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-design-tokens',
  templateUrl: './design-tokens.component.html'
})
export class DesignTokensComponent implements OnInit {

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    if (this.location.path() === '/design-tokens') {
      this.router.navigate(['design-tokens', 'unit']);
    }
  }

}
