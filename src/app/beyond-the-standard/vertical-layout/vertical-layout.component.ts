import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-vertical-layout',
  templateUrl: './vertical-layout.component.html',
  styleUrls: ['./vertical-layout.component.scss']
})
export class VerticalLayoutComponent implements OnInit {

  public verticalLayouts = [
    {
      img: '/assets/graphics/beyond-the-standard/vertical-layout/vertical-layout1.svg',
      alt: 'Vertical Layout 1 Graphic',
      styleClass: 'big'
    },
    {
      img: '/assets/graphics/beyond-the-standard/vertical-layout/vertical-layout2.svg',
      alt: 'Vertical Layout 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
