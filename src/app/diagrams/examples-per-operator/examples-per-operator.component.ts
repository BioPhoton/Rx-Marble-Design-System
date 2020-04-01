import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-examples-per-operator',
  templateUrl: './examples-per-operator.component.html',
  styleUrls: ['./examples-per-operator.component.scss']
})
export class ExamplesPerOperatorComponent implements OnInit {

  public examplesPerOperator = [
    {
      img: '/assets/graphics/diagrams/examples-per-operator/examples-per-operator1.svg',
      alt: 'Examples per Operator 1 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
