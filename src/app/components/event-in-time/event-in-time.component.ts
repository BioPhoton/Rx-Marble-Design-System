import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-event-in-time',
  templateUrl: './event-in-time.component.html',
  styleUrls: ['./event-in-time.component.scss']
})
export class EventInTimeComponent implements OnInit {

  public eventInTimes = [
    {
      img: '/assets/graphics/components/event-in-time/event-in-time1.svg',
      alt: 'Event in Time 1 Graphic',
      object: ' ',
      shape: 'Circle'
    },
    {
      img: '/assets/graphics/components/event-in-time/event-in-time2.svg',
      alt: 'Event in Time 2 Graphic',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
