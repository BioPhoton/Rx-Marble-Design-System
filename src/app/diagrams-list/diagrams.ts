import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { shareReplay } from 'rxjs/operators';

export interface MdsDiagram {
  group: string;
  name: string;
  image?: string;
  body?: string;
}

export const DIAGRAMS$: Observable<{
  [name: string]: MdsDiagram;
}> = fromPromise(
  import('../../static/diagrams.json').then(diagrams => diagrams.default),
).pipe(shareReplay());

export const DIAGRAM_GROUPS = [
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
