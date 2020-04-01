import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-diagram-canvas',
  templateUrl: './diagram-canvas.component.html',
  styleUrls: ['./diagram-canvas.component.scss']
})
export class DiagramCanvasComponent implements OnInit {
  public diagramsCanvas = [
    {
      img: '/assets/graphics/diagrams/diagram-canvas/diagram-canvas1.svg',
      alt: 'Diagram Canvas 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
