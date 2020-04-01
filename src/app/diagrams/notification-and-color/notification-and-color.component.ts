import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification-and-color',
  templateUrl: './notification-and-color.component.html',
  styleUrls: ['./notification-and-color.component.scss']
})
export class NotificationAndColorComponent implements OnInit {

  public notificationAndColors = [
    {
      img: '/assets/graphics/diagrams/notification-and-color/notification-and-color1.svg',
      alt: 'Notification and Color 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
