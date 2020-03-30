import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public components = [
    {
      img: '/assets/graphics/components/overview/overview1.svg',
      alt: 'Overview 1 Graphic',
      desc: 'Timeline'
    },
    {
      img: '/assets/graphics/components/overview/overview2.svg',
      alt: 'Overview 2 Graphic',
      desc: 'Observable'
    },
    {
      img: '/assets/graphics/components/overview/overview3.svg',
      alt: 'Overview 3 Graphic',
      desc: 'Time Span'
    },
    {
      img: '/assets/graphics/components/overview/overview4.svg',
      alt: 'Overview 4 Graphic',
      desc: 'Event In Time'
    },
    {
      img: '/assets/graphics/components/overview/overview5.svg',
      alt: 'Overview 5 Graphic',
      desc: 'Notification'
    },
    {
      img: '/assets/graphics/components/overview/overview6.svg',
      alt: 'Overview 6 Graphic',
      desc: 'Error'
    },
    {
      img: '/assets/graphics/components/overview/overview7.svg',
      alt: 'Overview 7 Graphic',
      desc: 'Completion'
    },
    {
      img: '/assets/graphics/components/overview/overview8.svg',
      alt: 'Overview 8 Graphic',
      desc: 'Operation'
    },
    {
      img: '/assets/graphics/components/overview/overview9.svg',
      alt: 'Overview 9 Graphic',
      desc: 'Operator Internals'
    },
    {
      img: '/assets/graphics/components/overview/overview10.svg',
      alt: 'Overview 10 Graphic',
      desc: 'Operator Scope'
    },
    {
      img: '/assets/graphics/components/overview/overview11.svg',
      alt: 'Overview 11 Graphic',
      desc: 'Task Stacks'
    },
    {
      img: '/assets/graphics/components/overview/overview12.svg',
      alt: 'Overview 12 Graphic',
      desc: 'Consumer Event'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
