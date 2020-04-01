import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-operator-and-line',
  templateUrl: './operator-and-line.component.html',
  styleUrls: ['./operator-and-line.component.scss']
})
export class OperatorAndLineComponent implements OnInit {

  public operatorAndLines = [
    {
      img: '/assets/graphics/diagrams/operator-and-line/operator-and-line1.svg',
      alt: 'Operator and Line 1 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
