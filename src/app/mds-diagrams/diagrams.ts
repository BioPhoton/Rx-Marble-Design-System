import { Observable } from 'rxjs';
import { fromPromise } from 'rxjs/internal-compatibility';
import { shareReplay } from 'rxjs/operators';

export interface MdsDiagram {
  class: string;
  name: string;
  desc?: string;
  image?: string;
  body?: string;
}

export const diagrams$: Observable<{
  [name: string]: MdsDiagram;
}> = fromPromise(
  import('../../static/diagrams.json').then(diagrams => diagrams.default),
).pipe(shareReplay());
