import { Component } from '@angular/core';

@Component({
  selector: 'mds-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.scss'],
})
export class OperatorComponent {
  public operators = [
    {
      img: '/assets/graphics/components/operator/operator1.svg',
      alt: 'Operator 1 Graphic',
      desc: 'Operator',
    },
    {
      img: '/assets/graphics/components/operator/operator2.svg',
      alt: 'Operator 2 Graphic',
      styleClass: 'big',
    },
  ];
}
