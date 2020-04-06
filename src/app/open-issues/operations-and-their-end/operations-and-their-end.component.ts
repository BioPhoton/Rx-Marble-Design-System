import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-operations-and-their-end',
  templateUrl: './operations-and-their-end.component.html',
  styleUrls: ['./operations-and-their-end.component.scss']
})
export class OperationsAndTheirEndComponent implements OnInit {

  public operationsAndTheirEnd = [
    {
      img: '/assets/graphics/open-issues/operations-and-their-end/operations-and-their-end1.svg',
      alt: 'Operations and their End 1 Graphic',
      styleClass: 'big'
    },
    {
      img: '/assets/graphics/open-issues/operations-and-their-end/operations-and-their-end2.svg',
      alt: 'Operations and their End 2 Graphic',
      styleClass: 'bigger'
    },
    {
      img: '/assets/graphics/open-issues/operations-and-their-end/operations-and-their-end3.svg',
      alt: 'Operations and their End 3 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
