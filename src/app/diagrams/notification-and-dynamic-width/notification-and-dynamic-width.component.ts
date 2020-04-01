import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification-and-dynamic-width',
  templateUrl: './notification-and-dynamic-width.component.html',
  styleUrls: ['./notification-and-dynamic-width.component.scss']
})
export class NotificationAndDynamicWidthComponent implements OnInit {

  public notificationAndDynamicWidths = [
    {
      img: '/assets/graphics/diagrams/notification-and-dynamic-width/notification-and-dynamic-width1.svg',
      alt: 'Notification and Dynamic Width 1 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
