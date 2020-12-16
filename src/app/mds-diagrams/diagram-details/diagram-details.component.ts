import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs/operators';
import { diagrams$ } from '../diagrams';

@Component({
  selector: 'mds-diagram-details',
  templateUrl: './diagram-details.component.html',
  styleUrls: ['./diagram-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramDetailsComponent {
  constructor(private route: ActivatedRoute) {}

  diagram$ = this.route.paramMap.pipe(
    map(params => params.get('selected')),
    filter(diagramName => !!diagramName),
    switchMap(diagramName =>
      diagrams$.pipe(map(diagrams => diagrams[diagramName])),
    ),
  );
}
