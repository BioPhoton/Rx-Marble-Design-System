import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-alternative-shape',
  templateUrl: './alternative-shape.component.html',
  styleUrls: ['./alternative-shape.component.scss']
})
export class AlternativeShapeComponent implements OnInit {

  public alternativeShapes = [
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape1.svg',
      alt: 'Alternative Shape 1 Graphic',
      desc: 'Cloud'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape2.svg',
      alt: 'Alternative Shape 1 Graphic',
      desc: 'Bottle'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape3.svg',
      alt: 'Alternative Shape 4 Graphic',
      desc: 'Emoji'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape4.svg',
      alt: 'Alternative Shape 4 Graphic',
      desc: 'Rounded Rectangle'
    }
  ];

  public ownAlternativeShapes = [
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape5.svg',
      alt: 'Alternative Shape 5 Graphic'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape6.svg',
      alt: 'Alternative Shape 6 Graphic'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape7.svg',
      alt: 'Alternative Shape 7 Graphic'
    },
    {
      img: '/assets/graphics/beyond-the-standard/alternative-shape/alternative-shape8.svg',
      alt: 'Alternative Shape 8 Graphic'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
