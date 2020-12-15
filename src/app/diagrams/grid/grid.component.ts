import { Component } from '@angular/core';

@Component({
  selector: 'mds-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  public grids = [
    {
      img: '/assets/graphics/diagrams/grid/grid1.svg',
      alt: 'Grid 1 Graphic',
      styleClass: 'bigger',
    },
  ];
}
