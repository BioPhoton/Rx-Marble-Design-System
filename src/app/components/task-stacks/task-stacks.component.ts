import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-task-stacks',
  templateUrl: './task-stacks.component.html',
  styleUrls: ['./task-stacks.component.scss']
})
export class TaskStacksComponent implements OnInit {

  public taskStacks = [
    {
      img: '/assets/graphics/components/task-stacks/task-stacks1.svg',
      alt: 'Task Stacks 1 Graphic',
      desc: 'Task Stacks'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
