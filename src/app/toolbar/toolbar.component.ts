import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'mds-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  isExpanded: boolean;

  public navItems = [
    {
      routerLink: '/introduction',
      icon: 'home',
      caption: 'Introduction',
      isExpanded: false
    },
    {
      icon: 'blur_circular',
      caption: 'Design Tokens',
      routerLink: '/design-tokens',
      isExpanded: false,
      children: [
        {
          routerLink: '/design-tokens/unit',
          caption: 'Unit',
        },
        {
          routerLink: '/design-tokens/font',
          caption: 'Font',
        },
        {
          routerLink: '/design-tokens/color',
          caption: 'Color',
        },
        {
          routerLink: '/design-tokens/line',
          caption: 'Line',
        },
        {
          routerLink: '/design-tokens/shape',
          caption: 'Shape',
        },
        {
          routerLink: '/design-tokens/size',
          caption: 'Size',
        }
      ]
    },
    {
      routerLink: '/components',
      icon: 'widgets',
      isExpanded: false,
      caption: 'Components',
      children: [
        {
          routerLink: '/components/overview',
          caption: 'Overview',
        },
        {
          routerLink: '/components/observable',
          caption: 'Observable',
        },
        {
          routerLink: '/components/time-span',
          caption: 'Time Span',
        },
        {
          routerLink: '/components/event-in-time',
          caption: 'Event in Time',
        },
        {
          routerLink: '/components/operation',
          caption: 'Operation',
        },
        {
          routerLink: '/components/consumer-event',
          caption: 'Consumer Event',
        }
      ]
    },
    {
      routerLink: '/diagrams',
      icon: 'insert_chart',
      caption: 'Diagrams',
      isExpanded: false
    }
  ];

  @Output() closeSidenav = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.subscribe((event: NavigationStart) => {
      if (!event.url) {
        return;
      }

      const item = this.navItems.find(it => it.routerLink.indexOf('/' + event.url.split('/')[1]) === 0);
      if (item) {
        item['isExpanded'] = true;
      }
    });
  }

  ngOnInit() {
  }
  public toggleSubMenu(navItem) {
    navItem.isExpanded = !navItem.isExpanded;
  }
}
