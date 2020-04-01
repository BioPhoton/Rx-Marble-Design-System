import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-multiple-operations',
  templateUrl: './multiple-operations.component.html',
  styleUrls: ['./multiple-operations.component.scss']
})
export class MultipleOperationsComponent implements OnInit {

  public multipleOperations = [
    {
      img: '/assets/graphics/diagrams/multiple-operations/multiple-operations1.svg',
      alt: 'Multiple Operations 1 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
