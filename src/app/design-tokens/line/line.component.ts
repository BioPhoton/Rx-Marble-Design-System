import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {

  public lines = [
    {
      img: '/assets/graphics/design-tokens/lines/line1.svg',
      alt: 'Line 1 Graphic',
      style: 'Solid',
      weight: '0.06em',
      start: 'none',
      end: 'Filled Arrow'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line2.svg',
      alt: 'Line 2 Graphic',
      style: 'Dashed',
      weight: '0.06em',
      start: 'Filled Arrow',
      end: 'none'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line3.svg',
      alt: 'Line 3 Graphic',
      style: 'Dashed',
      weight: '0.06em',
      start: 'none',
      end: 'Filled Arrow'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line4.svg',
      alt: 'Line 4 Graphic',
      style: 'Dashed',
      weight: '0.06em',
      start: 'none',
      end: 'Filled Arrow'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line5.svg',
      alt: 'Line 5 Graphic',
      style: 'Dashed',
      weight: '0.06em',
      start: 'none',
      end: 'none'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line6.svg',
      alt: 'Line 6 Graphic',
      style: 'Solid',
      weight: '0.06em',
      start: 'none',
      end: 'none'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line7.svg',
      alt: 'Line 7 Graphic',
      style: 'Solid',
      weight: '0.06em',
      start: 'none',
      end: 'none'
    },
    {
      img: '/assets/graphics/design-tokens/lines/line8.svg',
      alt: 'Line 8 Graphic',
      style: 'Dashed',
      weight: '0.06em',
      start: 'none',
      end: 'Filled Arrow'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
