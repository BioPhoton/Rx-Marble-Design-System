import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mds-design-tokens',
  templateUrl: './design-tokens.component.html'
})
export class DesignTokensComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['design-tokens', 'unit']);
  }

}
