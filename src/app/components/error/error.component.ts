import { Component } from '@angular/core';

@Component({
  selector: 'mds-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  public errors = [
    {
      img: '/assets/graphics/components/error/error1.svg',
      alt: 'Error 1 Graphic',
      desc: 'Error',
    },
  ];
}
