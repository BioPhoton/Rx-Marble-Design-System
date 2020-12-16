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
            routerLink: '/design-system/design-tokens/unit',
            name: 'Unit',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/design-tokens/font',
            name: 'Font',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/design-tokens/color',
            name: 'Color',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/design-tokens/line',
            name: 'Line',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/design-tokens/shape',
            name: 'Shape',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/design-tokens/size',
            name: 'Size',
            icon: 'remove',
          },
        ],
      },
      {
        name: 'Components',
        icon: 'widgets',
        children: [
          {
            routerLink: '/design-system/components/overview',
            name: 'Overview',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/observable',
            name: 'Observable',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/time-span',
            name: 'Time Span',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/event-in-time',
            name: 'Event in Time',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/operation',
            name: 'Operation',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/consumer-event',
            name: 'Consumer Event',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/notifications',
            name: 'Notifications',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/completion',
            name: 'Completion',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/error',
            name: 'Error',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/operator',
            name: 'Operator',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/components/task-stacks',
            name: 'Task Stacks',
            icon: 'remove',
          },
        ],
      },
      {
        name: 'Diagrams',
        icon: 'insert_chart',
        children: [
          {
            routerLink: '/design-system/diagrams/sections',
            name: 'Sections',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/description',
            name: 'Description',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/legend',
            name: 'Legend',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/flow-description',
            name: 'Flow Description',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/diagram-canvas',
            name: 'Diagram Canvas',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/grid',
            name: 'Grid',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/positioning',
            name: 'Positioning',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/notification-and-content',
            name: 'Notification and Content',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/notification-and-shape',
            name: 'Notification and Shape',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/notification-and-color',
            name: 'Notification and Color',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/multiple-notifications',
            name: 'Multiple Notifications',
            icon: 'remove',
          },
          {
            routerLink:
              '/design-system/diagrams/notification-and-dynamic-width',
            name: 'Notification and Dynamic Width',
            icon: 'remove',
          },
          {
            routerLink:
              '/design-system/diagrams/notification-and-inner-components',
            name: 'Notification and Inner Components',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/inner-state',
            name: 'Inner State',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/operator-padding',
            name: 'Operator Padding',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/operator-and-line',
            name: 'Operator and Line',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/multiple-operations',
            name: 'Multiple Operations',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/operator-nesting',
            name: 'Operator Nesting',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/inactive-components',
            name: 'Inactive Components',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/diagrams/examples-per-operator',
            name: 'Examples per Operator',
            icon: 'remove',
          },
        ],
      },
      {
        name: 'Beyond the Standard',
        icon: 'toys',
        children: [
          {
            routerLink: '/design-system/beyond-the-standard/alternative-shape',
            name: 'Alternative Shape',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/beyond-the-standard/alternative-units',
            name: 'Alternative Units',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/beyond-the-standard/todos',
            name: 'ToDos',
            icon: 'remove',
          },
          {
            routerLink: '/design-system/beyond-the-standard/vertical-layout',
            name: 'Vertical Layout',
            icon: 'remove',
          },
        ],
      },
      {
        name: 'Open Issues',
        icon: 'report_problem',
        children: [
          {
            routerLink: '/design-system/open-issues/operations-and-their-end',
            name: 'Operation and their end',
            icon: 'remove',
          },
        ],
      },
    ],
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
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  treeControl = new NestedTreeControl<NavNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavNode>();

  @ViewChild('toggleSidenav') toggleSidenav: MatButton;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.HandsetPortrait)
    .pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver) {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: NavNode) =>
    !!node.children && node.children.length > 0;
}
