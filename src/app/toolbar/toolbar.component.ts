import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RouterLinkActive } from '@angular/router';

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
      caption: 'Introduction'
    },
    {
      icon: 'blur_circular',
      caption: 'Design Tokens',
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
        }
      ]
    },
    {
      routerLink: '/components',
      icon: 'widgets',
      caption: 'Components'
    },
    {
      routerLink: '/diagrams',
      icon: 'insert_chart',
      caption: 'Diagrams'
    }
  ];

  @Output() closeSidenav = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  public toggleSubMenu(navItem) {
    navItem.isExpanded = !navItem.isExpanded;
  }
}
