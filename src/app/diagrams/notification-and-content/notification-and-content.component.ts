import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification-and-content',
  templateUrl: './notification-and-content.component.html',
  styleUrls: ['./notification-and-content.component.scss']
})
export class NotificationAndContentComponent implements OnInit {

  public notificationAndContents = [
    {
      img: '/assets/graphics/diagrams/notification-and-content/notification-and-content1.svg',
      alt: 'Notification and Content 1 Graphic',
      styleClass: 'big'
    },
    {
      img: '/assets/graphics/diagrams/notification-and-content/notification-and-content2.svg',
      alt: 'Notification and Content 2 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
