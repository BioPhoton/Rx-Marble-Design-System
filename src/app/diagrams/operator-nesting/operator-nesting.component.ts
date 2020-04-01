import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-operator-nesting',
  templateUrl: './operator-nesting.component.html',
  styleUrls: ['./operator-nesting.component.scss']
})
export class OperatorNestingComponent implements OnInit {

  public operatorNestings = [
    {
      img: '/assets/graphics/diagrams/operator-nesting/operator-nesting1.svg',
      alt: 'Operator Nesting 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
