import { Component } from '@angular/core';

@Component({
  selector: 'mds-operator-padding',
  templateUrl: './operator-padding.component.html',
  styleUrls: ['./operator-padding.component.scss'],
})
export class OperatorPaddingComponent {
  public operatorPaddings = [
    {
      img: '/assets/graphics/diagrams/operator-padding/operator-padding1.svg',
      alt: 'Operator Padding 1 Graphic',
      styleClass: 'bigger',
    },
  ];
}
