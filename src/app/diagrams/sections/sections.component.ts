import { Component } from '@angular/core';

@Component({
  selector: 'mds-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss'],
})
export class SectionsComponent {
  public sections = [
    {
      img: '/assets/graphics/diagrams/sections/sections1.svg',
      alt: 'Sections 1 Graphic',
      styleClass: 'bigger',
    },
  ];
}
