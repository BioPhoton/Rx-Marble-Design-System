import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-time-span',
  templateUrl: './time-span.component.html',
  styleUrls: ['./time-span.component.scss']
})
export class TimeSpanComponent implements OnInit {

  public timeSpans = [
    {
      img: '/assets/graphics/components/time-span/time-span1.svg',
      alt: 'Time Span 1 Graphic',
      object: ' ',
      shape: 'Rectangle'
    },
    {
      img: '/assets/graphics/components/time-span/time-span2.svg',
      alt: 'Time Span 2 Graphic',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
