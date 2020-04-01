import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-multiple-notifications',
  templateUrl: './multiple-notifications.component.html',
  styleUrls: ['./multiple-notifications.component.scss']
})
export class MultipleNotificationsComponent implements OnInit {

  public multipleNotifications = [
    {
      img: '/assets/graphics/diagrams/multiple-notifications/multiple-notifications1.svg',
      alt: 'Multiple Notifications 1 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
