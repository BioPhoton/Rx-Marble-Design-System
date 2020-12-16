import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { diagrams$, MdsDiagram } from './diagrams';

@Component({
  selector: 'mds-diagrams-list',
  templateUrl: './diagrams-list.component.html',
  styleUrls: ['./diagrams-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiagramsListComponent {
  readonly indexGroups = [
    { label: 'Show all', value: undefined },
    { label: 'Rate limiting', value: 'rate-limiting' },
    { label: 'Buffer', value: 'buffer' },
    { label: 'Error handling', value: 'error-handling' },
    { label: 'Combine', value: 'combine' },
    { label: 'Merge', value: 'merge' },
    { label: 'Scan', value: 'scan' },
    { label: 'Condition', value: 'condition' },
    { label: 'Timing', value: 'timing' },
    { label: 'Transform', value: 'transform' },
    { label: 'Filter', value: 'filter' },
    { label: 'Side effect', value: 'side-effect' },
    { label: 'Multicast', value: 'multicast' },
    { label: 'Scheduling', value: 'scheduling' },
    { label: 'Slice', value: 'slice' },
    { label: 'Subject', value: 'subject' },
    { label: 'Creation', value: 'creation' },
  ];

  displayItems$ = diagrams$.pipe(
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
