import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  public observables = [
    {
      img: '/assets/graphics/components/observable/observable1.svg',
      alt: 'Observable 1 Graphic',
      desc: 'Time'
    },
    {
      img: '/assets/graphics/components/observable/observable2.svg',
      alt: 'Observable 2 Graphic',
      styleClass: 'big'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
