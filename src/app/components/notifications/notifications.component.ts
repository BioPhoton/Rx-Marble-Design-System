import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  public notifications = [
    {
      img: '/assets/graphics/components/notifications/notifications1.svg',
      alt: 'Notifications 1 Graphic',
      desc: 'Notification'
    },
    {
      img: '/assets/graphics/components/notifications/notifications2.svg',
      alt: 'Notifications 2 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
