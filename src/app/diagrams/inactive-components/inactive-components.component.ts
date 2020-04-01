import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-inactive-components',
  templateUrl: './inactive-components.component.html',
  styleUrls: ['./inactive-components.component.scss']
})
export class InactiveComponentsComponent implements OnInit {

  public inactiveComponents = [
    {
      img: '/assets/graphics/diagrams/inactive-components/inactive-components1.svg',
      alt: 'Inactive Components 1 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
