import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
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
        },
        {
          routerLink: '/components/notification',
          caption: 'Notification',
        },
        {
          routerLink: '/components/completion',
          caption: 'Completion',
        },
        {
          routerLink: '/components/error',
          caption: 'Error',
        },
        {
          routerLink: '/components/operator',
          caption: 'Operator',
        },
        {
          routerLink: '/components/task-stacks',
          caption: 'Task Stacks',
        }
      ]
    },
    {
      routerLink: '/diagrams',
      icon: 'insert_chart',
      caption: 'Diagrams',
      isExpanded: false,
      children: [
        {
          routerLink: '/diagrams/sections',
          caption: 'Sections',
        },
        {
          routerLink: '/diagrams/description',
          caption: 'Description',
        },
        {
          routerLink: '/diagrams/legend',
          caption: 'Legend',
        },
        {
          routerLink: '/diagrams/flow-description',
          caption: 'Flow Description',
        },
        {
          routerLink: '/diagrams/diagram-canvas',
          caption: 'Diagram Canvas',
        },
        {
          routerLink: '/diagrams/grid',
          caption: 'Grid',
        },
        {
          routerLink: '/diagrams/positioning',
          caption: 'Positioning',
        },
        {
          routerLink: '/diagrams/notification-and-content',
          caption: 'Notification and Content',
        },
        {
          routerLink: '/diagrams/notification-and-shape',
          caption: 'Notification and Shape',
        },
        {
          routerLink: '/diagrams/notification-and-color',
          caption: 'Notification and Color',
        },
        {
          routerLink: '/diagrams/multiple-notifications',
          caption: 'Multiple Notifications',
        },
        {
          routerLink: '/diagrams/notification-and-dynamic-width',
          caption: 'Notification and Dynamic Width',
        },
        {
          routerLink: '/diagrams/notification-and-inner-components',
          caption: 'Notification and Inner Components',
        },
        {
          routerLink: '/diagrams/inner-state',
          caption: 'Inner State',
        },
        {
          routerLink: '/diagrams/operator-padding',
          caption: 'Operator Padding',
        },
        {
          routerLink: '/diagrams/operator-and-line',
          caption: 'Operator and Line',
        },
        {
          routerLink: '/diagrams/multiple-operations',
          caption: 'Multiple Operations',
        },
        {
          routerLink: '/diagrams/operator-nesting',
          caption: 'Operator Nesting',
        },
        {
          routerLink: '/diagrams/inactive-components',
          caption: 'Inactive Components',
        },
        {
          routerLink: '/diagrams/examples-per-operator',
          caption: 'Examples per Operator',
        }
      ]
    },
    {
      routerLink: '/beyond-the-standard',
      icon: 'toys',
      caption: 'Beyond the Standard',
      isExpanded: false,
      children: [
        {
          routerLink: '/beyond-the-standard/alternative-shape',
          caption: 'Alternative Shape',
        },
        {
          routerLink: '/beyond-the-standard/alternative-units',
          caption: 'Alternative Units',
        },
        {
          routerLink: '/beyond-the-standard/todos',
          caption: 'ToDos',
        },
        {
          routerLink: '/beyond-the-standard/vertical-layout',
          caption: 'Vertical Layout',
        }
      ]
    }
  ];

  @Output() closeSidenav = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) {
    this.router.events.pipe(take(1)).subscribe((event: NavigationStart) => {
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
  public toggleSubMenu(event, navItem) {
    if (!navItem.isExpanded) {
      this.closeOpenItems();
      navItem.isExpanded = true;
    } else {
      navItem.isExpanded = false;
    }
  }

  private closeOpenItems() {
    this.navItems.forEach(item => {
      item.isExpanded = false;
    });
  }
}
