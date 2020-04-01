import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {

  public operations = [
    {
      img: '/assets/graphics/components/operation/operation1.svg',
      alt: 'Operation 1 Graphic',
      desc: 'Operation'
    },
    {
      img: '/assets/graphics/components/operation/operation2.svg',
      alt: 'Operation 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
