import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {MdsDiagram, mdsDiagrams} from '../diagrams';



@Component({
  selector: 'mds-diagram-details',
  templateUrl: './diagram-details.component.html',
  styleUrls: ['./diagram-details.component.scss']
})
export class DiagramDetailsComponent implements OnInit, OnDestroy {
  private subscriptionGroup: Subscription = new Subscription();
  public diagram: MdsDiagram;
  private diagramId: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.subscriptionGroup.add(this.route.paramMap.subscribe(params => {
       this.diagramId = params.get('selected');
       this.diagram = mdsDiagrams.find(diagram => diagram.desc === this.diagramId);
    }));
  }


  ngOnDestroy(): void {
    this.subscriptionGroup.unsubscribe();
  }
}
