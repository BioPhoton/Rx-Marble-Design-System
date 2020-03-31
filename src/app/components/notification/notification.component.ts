import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  public notifications = [
    {
      img: '/assets/graphics/components/notification/notification1.svg',
      alt: 'Notification 1 Graphic',
      desc: 'Notification'
    },
    {
      img: '/assets/graphics/components/notification/notification2.svg',
      alt: 'Notification 2 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
