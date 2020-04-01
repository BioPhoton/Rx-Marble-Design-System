import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification-and-shape',
  templateUrl: './notification-and-shape.component.html',
  styleUrls: ['./notification-and-shape.component.scss']
})
export class NotificationAndShapeComponent implements OnInit {

  public notificationAndShapes = [
    {
      img: '/assets/graphics/diagrams/notification-and-shape/notification-and-shape1.svg',
      alt: 'Notification and Shape 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
