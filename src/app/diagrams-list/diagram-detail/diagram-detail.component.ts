import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { DIAGRAMS$ } from '../diagrams';

@Component({
  selector: 'mds-diagram-detail',
  templateUrl: './diagram-detail.component.html',
  styleUrls: ['./diagram-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramDetailComponent {
  constructor(private route: ActivatedRoute) {}

  diagram$ = this.route.paramMap.pipe(
    map(params => params.get('name')),
    filter(diagramName => !!diagramName),
    switchMap(diagramName =>
      DIAGRAMS$.pipe(map(diagrams => diagrams[diagramName])),
    ),
  );
}
