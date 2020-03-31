import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-completion',
  templateUrl: './completion.component.html',
  styleUrls: ['./completion.component.scss']
})
export class CompletionComponent implements OnInit {

  public completions = [
    {
      img: '/assets/graphics/components/completion/completion1.svg',
      alt: 'Completion 1 Graphic',
      desc: 'Completion'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
