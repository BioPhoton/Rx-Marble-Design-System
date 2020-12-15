import { Component } from '@angular/core';

@Component({
  selector: 'mds-notification-and-inner-components',
  templateUrl: './notification-and-inner-components.component.html',
  styleUrls: ['./notification-and-inner-components.component.scss'],
})
export class NotificationAndInnerComponentsComponent {
  public notificationAndInnerComponents = [
    {
      img:
        '/assets/graphics/diagrams/notification-and-inner-components/notification-and-inner-components1.svg',
      alt: 'Notification and Inner Components 1 Graphic',
      styleClass: 'bigger',
    },
  ];
}
