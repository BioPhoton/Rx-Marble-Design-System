import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.scss']
})
export class LegendComponent implements OnInit {

  public legends = [
    {
      img: '/assets/graphics/diagrams/legend/legend1.svg',
      alt: 'Legend 1 Graphic',
      styleClass: 'bigger'
    },
    {
      img: '/assets/graphics/diagrams/legend/legend2.svg',
      alt: 'Legend 2 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
