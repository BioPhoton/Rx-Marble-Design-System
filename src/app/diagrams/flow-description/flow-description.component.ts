import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-flow-description',
  templateUrl: './flow-description.component.html',
  styleUrls: ['./flow-description.component.scss']
})
export class FlowDescriptionComponent implements OnInit {

  public flowDescriptions = [
    {
      img: '/assets/graphics/diagrams/flow-description/flow-description1.svg',
      alt: 'Flow Description 1 Graphic',
      styleClass: 'bigger'
    },
    {
      img: '/assets/graphics/diagrams/flow-description/flow-description2.svg',
      alt: 'Flow Description 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
