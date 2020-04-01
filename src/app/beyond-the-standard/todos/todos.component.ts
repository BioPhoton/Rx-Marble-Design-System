import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todos = [
    {
      img: '/assets/graphics/beyond-the-standard/todos/todos1.svg',
      alt: 'Todos 1 Graphic',
      styleClass: 'bigger'
    },
    {
      img: '/assets/graphics/beyond-the-standard/todos/todos2.svg',
      alt: 'Todos 2 Graphic',
      styleClass: 'bigger'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
