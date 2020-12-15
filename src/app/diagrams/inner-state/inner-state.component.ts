import { Component } from '@angular/core';

@Component({
  selector: 'mds-inner-state',
  templateUrl: './inner-state.component.html',
  styleUrls: ['./inner-state.component.scss'],
})
export class InnerStateComponent {
  public innerStates = [
    {
      img: '/assets/graphics/diagrams/inner-state/inner-state1.svg',
      alt: 'Inner State 1 Graphic',
      styleClass: 'big',
    },
  ];
}
