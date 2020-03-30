import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.scss']
})
export class ShapeComponent implements OnInit {

  public shapes = [
    {
      img: '/assets/graphics/design-tokens/shapes/shape1.svg',
      alt: 'Shape 1 Graphic',
      desc: 'Rectangle'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape2.svg',
      alt: 'Shape 2 Graphic',
      desc: 'Circle'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape3.svg',
      alt: 'Shape 3 Graphic',
      desc: 'Diamond'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape4.svg',
      alt: 'Shape 4 Graphic',
      desc: 'Cross'
    }
  ];

  public ownShapes = [
    {
      img: '/assets/graphics/design-tokens/shapes/shape5.svg',
      alt: 'Shape 5 Graphic'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape6.svg',
      alt: 'Shape 6 Graphic'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape7.svg',
      alt: 'Shape 7 Graphic'
    },
    {
      img: '/assets/graphics/design-tokens/shapes/shape8.svg',
      alt: 'Shape 8 Graphic'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
