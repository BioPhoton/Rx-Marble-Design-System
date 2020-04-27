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
          },
          {
            routerLink: '/design-tokens/font',
            name: 'Font',
          },
          {
            routerLink: '/design-tokens/color',
            name: 'Color',
          },
          {
            routerLink: '/design-tokens/line',
            name: 'Line',
          },
          {
            routerLink: '/design-tokens/shape',
            name: 'Shape',
          },
          {
            routerLink: '/design-tokens/size',
            name: 'Size',
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
          },
          {
            routerLink: '/components/observable',
            name: 'Observable',
          },
          {
            routerLink: '/components/time-span',
            name: 'Time Span',
          },
          {
            routerLink: '/components/event-in-time',
            name: 'Event in Time',
          },
          {
            routerLink: '/components/operation',
            name: 'Operation',
          },
          {
            routerLink: '/components/consumer-event',
            name: 'Consumer Event',
          },
          {
            routerLink: '/components/notifications',
            name: 'Notifications',
          },
          {
            routerLink: '/components/completion',
            name: 'Completion',
          },
          {
            routerLink: '/components/error',
            name: 'Error',
          },
          {
            routerLink: '/components/operator',
            name: 'Operator',
          },
          {
            routerLink: '/components/task-stacks',
            name: 'Task Stacks',
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
          },
          {
            routerLink: '/diagrams/description',
            name: 'Description',
          },
          {
            routerLink: '/diagrams/legend',
            name: 'Legend',
          },
          {
            routerLink: '/diagrams/flow-description',
            name: 'Flow Description',
          },
          {
            routerLink: '/diagrams/diagram-canvas',
            name: 'Diagram Canvas',
          },
          {
            routerLink: '/diagrams/grid',
            name: 'Grid',
          },
          {
            routerLink: '/diagrams/positioning',
            name: 'Positioning',
          },
          {
            routerLink: '/diagrams/notification-and-content',
            name: 'Notification and Content',
          },
          {
            routerLink: '/diagrams/notification-and-shape',
            name: 'Notification and Shape',
          },
          {
            routerLink: '/diagrams/notification-and-color',
            name: 'Notification and Color',
          },
          {
            routerLink: '/diagrams/multiple-notifications',
            name: 'Multiple Notifications',
          },
          {
            routerLink: '/diagrams/notification-and-dynamic-width',
            name: 'Notification and Dynamic Width',
          },
          {
            routerLink: '/diagrams/notification-and-inner-components',
            name: 'Notification and Inner Components',
          },
          {
            routerLink: '/diagrams/inner-state',
            name: 'Inner State',
          },
          {
            routerLink: '/diagrams/operator-padding',
            name: 'Operator Padding',
          },
          {
            routerLink: '/diagrams/operator-and-line',
            name: 'Operator and Line',
          },
          {
            routerLink: '/diagrams/multiple-operations',
            name: 'Multiple Operations',
          },
          {
            routerLink: '/diagrams/operator-nesting',
            name: 'Operator Nesting',
          },
          {
            routerLink: '/diagrams/inactive-components',
            name: 'Inactive Components',
          },
          {
            routerLink: '/diagrams/examples-per-operator',
            name: 'Examples per Operator',
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
          },
          {
            routerLink: '/beyond-the-standard/alternative-units',
            name: 'Alternative Units',
          },
          {
            routerLink: '/beyond-the-standard/todos',
            name: 'ToDos',
          },
          {
            routerLink: '/beyond-the-standard/vertical-layout',
            name: 'Vertical Layout',
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
