import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent implements OnInit {

  public sizes = [
    {
      img: '/assets/graphics/design-tokens/sizes/size1.svg',
      alt: 'Size 1 Graphic',
      desc: 'Time'
    },
    {
      img: '/assets/graphics/design-tokens/sizes/size2.svg',
      alt: 'Size 2 Graphic',
      desc: 'Notification'
    },
    {
      img: '/assets/graphics/design-tokens/sizes/size3.svg',
      alt: 'Size 3 Graphic',
      desc: 'Completion'
    },
    {
      img: '/assets/graphics/design-tokens/sizes/size4.svg',
      alt: 'Size 4 Graphic',
      desc: 'Error'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
