import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-alternative-units',
  templateUrl: './alternative-units.component.html',
  styleUrls: ['./alternative-units.component.scss']
})
export class AlternativeUnitsComponent implements OnInit {

  public alternativeUnits = [
    {
      img: '/assets/graphics/beyond-the-standard/alternative-units/alternative-units1.svg',
      alt: 'Alternative Units 1 Graphic'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-units/alternative-units2.svg',
      alt: 'Alternative Units 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
