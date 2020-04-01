import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  public descriptions = [
    {
      img: '/assets/graphics/diagrams/description/description1.svg',
      alt: 'Description 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
