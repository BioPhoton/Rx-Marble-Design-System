import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-consumer-event',
  templateUrl: './consumer-event.component.html',
  styleUrls: ['./consumer-event.component.scss']
})
export class ConsumerEventComponent implements OnInit {

  public consumerEvents = [
    {
      img: '/assets/graphics/components/consumer-event/consumer-event1.svg',
      alt: 'Consumer Events 1 Graphic',
      desc: 'Consumer Events'
    },
    {
      img: '/assets/graphics/components/consumer-event/consumer-event2.svg',
      alt: 'Consumer Events 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
