import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-positioning',
  templateUrl: './positioning.component.html',
  styleUrls: ['./positioning.component.scss']
})
export class PositioningComponent implements OnInit {

  public positionings = [
    {
      img: '/assets/graphics/diagrams/positioning/positioning1.svg',
      alt: 'Positioning 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
