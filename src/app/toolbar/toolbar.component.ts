import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatButton } from '@angular/material/button';

interface NavNode {
  name: string;
  routerLink?: string;
  icon?: string;
  children?: NavNode[];
}

const TREE_DATA: NavNode[] = [
  {
    name: 'Introduction',
    routerLink: '/introduction',
    icon: 'home',
  },
  {
    name: 'Marble Design System',
    icon: 'blur_circular',
    children: [
      {
        name: 'Design Tokens',
        icon: 'brush',
        children: [
          {
            routerLink: '/design-tokens/unit',
            name: 'Unit',
            icon: 'remove'
          },
          {
            routerLink: '/design-tokens/font',
            name: 'Font',
            icon: 'remove'
          },
          {
            routerLink: '/design-tokens/color',
            name: 'Color',
            icon: 'remove'
          },
          {
            routerLink: '/design-tokens/line',
            name: 'Line',
            icon: 'remove'
          },
          {
            routerLink: '/design-tokens/shape',
            name: 'Shape',
            icon: 'remove'
          },
          {
            routerLink: '/design-tokens/size',
            name: 'Size',
            icon: 'remove'
          }
        ]
      },
      {
        name: 'Components',
        icon: 'widgets',
        children: [
          {
            routerLink: '/components/overview',
            name: 'Overview',
            icon: 'remove'
          },
          {
            routerLink: '/components/observable',
            name: 'Observable',
            icon: 'remove'
          },
          {
            routerLink: '/components/time-span',
            name: 'Time Span',
            icon: 'remove'
          },
          {
            routerLink: '/components/event-in-time',
            name: 'Event in Time',
            icon: 'remove'
          },
          {
            routerLink: '/components/operation',
            name: 'Operation',
            icon: 'remove'
          },
          {
            routerLink: '/components/consumer-event',
            name: 'Consumer Event',
            icon: 'remove'
          },
          {
            routerLink: '/components/notifications',
            name: 'Notifications',
            icon: 'remove'
          },
          {
            routerLink: '/components/completion',
            name: 'Completion',
            icon: 'remove'
          },
          {
            routerLink: '/components/error',
            name: 'Error',
            icon: 'remove'
          },
          {
            routerLink: '/components/operator',
            name: 'Operator',
            icon: 'remove'
          },
          {
            routerLink: '/components/task-stacks',
            name: 'Task Stacks',
            icon: 'remove'
          }
        ]
      },
      {
        name: 'Diagrams',
        icon: 'insert_chart',
        children: [
          {
            routerLink: '/diagrams/sections',
            name: 'Sections',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/description',
            name: 'Description',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/legend',
            name: 'Legend',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/flow-description',
            name: 'Flow Description',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/diagram-canvas',
            name: 'Diagram Canvas',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/grid',
            name: 'Grid',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/positioning',
            name: 'Positioning',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/notification-and-content',
            name: 'Notification and Content',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/notification-and-shape',
            name: 'Notification and Shape',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/notification-and-color',
            name: 'Notification and Color',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/multiple-notifications',
            name: 'Multiple Notifications',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/notification-and-dynamic-width',
            name: 'Notification and Dynamic Width',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/notification-and-inner-components',
            name: 'Notification and Inner Components',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/inner-state',
            name: 'Inner State',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/operator-padding',
            name: 'Operator Padding',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/operator-and-line',
            name: 'Operator and Line',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/multiple-operations',
            name: 'Multiple Operations',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/operator-nesting',
            name: 'Operator Nesting',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/inactive-components',
            name: 'Inactive Components',
            icon: 'remove'
          },
          {
            routerLink: '/diagrams/examples-per-operator',
            name: 'Examples per Operator',
            icon: 'remove'
          }
        ]
      },
      {
        name: 'Beyond the Standard',
        icon: 'toys',
        children: [
          {
            routerLink: '/beyond-the-standard/alternative-shape',
            name: 'Alternative Shape',
            icon: 'remove'
          },
          {
            routerLink: '/beyond-the-standard/alternative-units',
            name: 'Alternative Units',
            icon: 'remove'
          },
          {
            routerLink: '/beyond-the-standard/todos',
            name: 'ToDos',
            icon: 'remove'
          },
          {
            routerLink: '/beyond-the-standard/vertical-layout',
            name: 'Vertical Layout',
            icon: 'remove'
          }
        ]
      },
      {
        name: 'Open Issues',
        icon: 'report_problem',
        children: [
          {
            routerLink: '/open-issues/operations-and-their-end',
            name: 'Operation and their end',
            icon: 'remove'
          }
        ]
      },
    ]
  },
  {
    name: 'Marble Diagrams',
    routerLink: '/mds-diagrams',
    icon: 'list',
  },
];



@Component({
  selector: 'mds-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  treeControl = new NestedTreeControl<NavNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavNode>();

  @ViewChild('toggleSidenav') toggleSidenav: MatButton;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: NavNode) => !!node.children && node.children.length > 0;

  ngOnInit() {
  }

}
