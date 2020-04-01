import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-alternative-shape',
  templateUrl: './alternative-shape.component.html',
  styleUrls: ['./alternative-shape.component.scss']
})
export class AlternativeShapeComponent implements OnInit {

  public alternativeShapes = [
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape1.svg',
      alt: 'Alternative Shape 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
