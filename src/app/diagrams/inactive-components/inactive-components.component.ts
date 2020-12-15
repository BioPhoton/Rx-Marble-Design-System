import { Component } from '@angular/core';

@Component({
  selector: 'mds-inactive-components',
  templateUrl: './inactive-components.component.html',
  styleUrls: ['./inactive-components.component.scss'],
})
export class InactiveComponentsComponent {
  public inactiveComponents = [
    {
      img:
        '/assets/graphics/diagrams/inactive-components/inactive-components1.svg',
      alt: 'Inactive Components 1 Graphic',
      styleClass: 'big',
    },
  ];
}
