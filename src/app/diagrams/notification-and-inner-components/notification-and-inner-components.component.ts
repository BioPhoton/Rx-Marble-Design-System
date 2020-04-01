import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification-and-inner-components',
  templateUrl: './notification-and-inner-components.component.html',
  styleUrls: ['./notification-and-inner-components.component.scss']
})
export class NotificationAndInnerComponentsComponent implements OnInit {

  public notificationAndInnerComponents = [
    {
      img: '/assets/graphics/diagrams/notification-and-inner-components/notification-and-inner-components1.svg',
      alt: 'Notification and Inner Components 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
