import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { shareReplay } from 'rxjs/operators';

export interface MdsDiagram {
  group: string;
  name: string;
  image?: string;
  body?: string;
}

export const diagrams$: Observable<{
  [name: string]: MdsDiagram;
}> = fromPromise(
  import('../../static/diagrams.json').then(diagrams => diagrams.default),
).pipe(shareReplay());
