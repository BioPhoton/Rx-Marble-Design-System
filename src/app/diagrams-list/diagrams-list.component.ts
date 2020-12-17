import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { DIAGRAM_GROUPS, DIAGRAMS$, MdsDiagram } from './diagrams';

@Component({
  selector: 'mds-diagrams-list',
  templateUrl: './diagrams-list.component.html',
  styleUrls: ['./diagrams-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramsListComponent {
  readonly indexGroups = DIAGRAM_GROUPS;

  displayItems$ = DIAGRAMS$.pipe(
    map(diagrams => Object.values(diagrams)),
    switchMap(diagrams =>
      this.route.queryParamMap.pipe(
        map(params => params.get('group')),
        map(groupName =>
          !groupName
            ? diagrams
            : diagrams.filter(({ group }) => group === groupName),
        ),
      ),
    ),
  );

  constructor(private route: ActivatedRoute) {}

  listViewMode$ = this.route.queryParamMap.pipe(
    map(params => params.get('viewMode') !== 'tile'),
  );

  trackByFn(_, { name }: MdsDiagram): string {
    return name;
  }
}
