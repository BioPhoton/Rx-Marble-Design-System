import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {

  public units = [
    {
      img: '/assets/graphics/design-tokens/unit/unit1.svg',
      alt: 'Unit 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
