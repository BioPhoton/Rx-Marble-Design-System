import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'mds-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public navItems = [
    {
      routerLink: '/introduction',
      icon: 'home',
      caption: 'Introduction'
    },
    {
      routerLink: '/design-tokens',
      icon: 'blur_circular',
      caption: 'Design Tokens'
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

  public drawer;

  @Output() closeSidenav = new EventEmitter<void>();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.HandsetPortrait)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

  public onClose() {
    if (this.isHandset$) {
      this.drawer.close();
    }
  }

}
