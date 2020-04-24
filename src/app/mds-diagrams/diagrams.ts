export interface MdsDiagram {
  hidden?: boolean;
  class: string;
  desc: string;
  image?: string;
  text?: string;
}

export const mdsDiagrams: MdsDiagram[] = [
  {
    hidden: false, class: 'rate-limit',
    desc: 'audit',
    image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/audit.png?raw=true',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'auditTime',
    image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/auditTime.png?raw=true'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'buffer'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'bufferCount',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'bufferTime'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'bufferToggle'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'bufferWhen'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'catchError'
  },
  {
    hidden: false, class: 'combine',
    desc: 'combineAll'
  },
  {
    hidden: false, class: 'combine',
    desc: 'combineLatest'
  },
  {
    hidden: false, class: 'merge',
    desc: 'concat',
    image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/flattening/concat/concat.png?raw=true'
  },
  {
    hidden: false, class: 'merge',
    desc: 'concatAll'
  },
  {
    hidden: false, class: 'merge',
    desc: 'concatMap'
  },
  {
    hidden: false, class: 'merge',
    desc: 'concatMapTo'
  },
  {
    hidden: false, class: 'scan',
    desc: 'count'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'debounce'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'debounceTime'
  },
  {
    hidden: false, class: 'condition',
    desc: 'defaultEmpty'
  },
  {
    hidden: false, class: 'timing',
    desc: 'delay'
  },
  {
    hidden: false, class: 'timing',
    desc: 'delayWhen'
  },
  {
    hidden: false, class: 'transform',
    desc: 'dematerialize'
  },
  {
    hidden: false, class: 'filter',
    desc: 'distinct'
  },
  {
    hidden: false, class: 'filter',
    desc: 'distinctUntilChanged'
  },
  {
    hidden: false, class: 'filter',
    desc: 'distinctUntilKexChanged'
  },
  {
    hidden: false, class: 'filter',
    desc: 'elementAt'
  },
  {
    hidden: false, class: 'combine',
    desc: 'endWith'
  },
  {
    hidden: false, class: 'scan',
    desc: 'every'
  },
  {
    hidden: false, class: 'merge',
    desc: 'exhaust'
  },
  {
    hidden: false, class: 'merge',
    desc: 'exhaustMap'
  },
  {
    hidden: false, class: 'merge',
    desc: 'expand'
  },
  {
    hidden: false, class: 'filter',
    desc: 'Filter'
  },
  {
    hidden: false, class: 'side-effect',
    desc: 'finalize'
  },
  {
    hidden: false, class: 'filter',
    desc: 'find'
  },
  {
    hidden: false, class: 'filter',
    desc: 'findIndex'
  },
  {
    hidden: false, class: 'filter',
    desc: 'first'
  },
  {
    hidden: false, class: 'slice',
    desc: 'groupBy'
  },
  {
    hidden: false, class: 'filter',
    desc: 'ignoreElements'
  },
  {
    hidden: false, class: 'condition',
    desc: 'isEmpty'
  },
  {
    hidden: false, class: 'filter',
    desc: 'last'
  },
  {
    hidden: false, class: 'transform',
    desc: 'map'
  },
  {
    hidden: false, class: 'transform',
    desc: 'mapTo'
  },
  {
    hidden: false, class: 'transform',
    desc: 'materialize'
  },
  {
    hidden: false, class: 'scan',
    desc: 'max'
  },
  {
    hidden: false, class: 'merge',
    desc: 'merge'
  },
  {
    hidden: false, class: 'merge',
    desc: 'mergeAll'
  },
  {
    hidden: false, class: 'merge',
    desc: 'mergeMap'
  },
  {
    hidden: false, class: 'merge',
    desc: 'flatMap'
  },
  {
    hidden: false, class: 'merge',
    desc: 'mergeMapTp'
  },
  {
    hidden: false, class: 'merge',
    desc: 'mergeScan'
  },
  {
    hidden: false, class: 'scan',
    desc: 'min'
  },
  {
    hidden: false, class: 'scheduling',
    desc: 'observeOn'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'onErrorResumeNext'
  },
  {
    hidden: false, class: 'buffer',
    desc: 'pairwise'
  },
  {
    hidden: false, class: 'filter',
    desc: 'partition'
  },
  {
    hidden: false, class: 'transform',
    desc: 'pluck'
  },
  {
    hidden: false, class: 'condition',
    desc: 'race'
  },
  {
    hidden: false, class: 'scan',
    desc: 'reduce'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'repeat'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'repeatWhen'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'retry'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'retryWhen'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'sample'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'sampleTime'
  },
  {
    hidden: false, class: 'scan',
    desc: 'scan'
  },
  {
    hidden: false, class: 'scan',
    desc: 'sequenceEqual'
  },
  {
    hidden: false, class: 'filter',
    desc: 'single'
  },
  {
    hidden: false, class: 'filter',
    desc: 'skip'
  },
  {
    hidden: false, class: 'filter',
    desc: 'skipLast'
  },
  {
    hidden: false, class: 'filter',
    desc: 'skipUntil'
  },
  {
    hidden: false, class: 'filter',
    desc: 'skipWhile'
  },
  {
    hidden: false, class: 'combine',
    desc: 'startWith'
  },
  {
    hidden: false, class: 'scheduling',
    desc: 'subscribeOn'
  },
  {
    hidden: false, class: 'merge',
    desc: 'switchAll'
  },
  {
    hidden: false, class: 'merge',
    desc: 'switchMap'
  },
  {
    hidden: false, class: 'merge',
    desc: 'switchMapTo'
  },
  {
    hidden: false, class: 'combine',
    desc: 'switchScan'
  },
  {
    hidden: false, class: 'filter',
    desc: 'take'
  },
  {
    hidden: false, class: 'filter',
    desc: 'takeLast'
  },
  {
    hidden: false, class: 'filter',
    desc: 'takeUntil'
  },
  {
    hidden: false, class: 'filter',
    desc: 'takeWhile'
  },
  {
    hidden: false, class: 'side-effect',
    desc: 'tab'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'throttle'
  },
  {
    hidden: false, class: 'rate-limit',
    desc: 'throttleTime'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'throwIfEmpty'
  },
  {
    hidden: false, class: 'transform',
    desc: 'timeInInterval'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'timeout'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'timeoutWith'
  },
  {
    hidden: false, class: 'transform',
    desc: 'timestamp'
  },
  {
    hidden: false, class: 'scan',
    desc: 'toArray'
  },
  {
    hidden: false, class: 'scan',
    desc: 'window'
  },
  {
    hidden: false, class: 'scan',
    desc: 'windowCount'
  },
  {
    hidden: false, class: 'scan',
    desc: 'windowTime'
  },
  {
    hidden: false, class: 'scan',
    desc: 'windowToggle'
  },
  {
    hidden: false, class: 'scan',
    desc: 'windowWhen'
  },
  {
    hidden: false, class: 'combine',
    desc: 'withLatestFrom'
  },
  {
    hidden: false, class: 'combine',
    desc: 'zip'
  },
  {
    hidden: false, class: 'combine',
    desc: 'zipAll'
  },
  {
    hidden: false, class: 'subject',
    desc: 'AsyncSubject'
  },
  {
    hidden: false, class: 'subject',
    desc: 'BehaviourSubject'
  },
  {
    hidden: false, class: 'combine',
    desc: 'combineLatest'
  },
  {
    hidden: false, class: 'merge',
    desc: 'concat'
  },
  {
    hidden: false, class: 'creation',
    desc: 'create'
  },
  {
    hidden: false, class: 'creation',
    desc: 'defer'
  },
  {
    hidden: false, class: 'creation',
    desc: 'EMPTY'
  },
  {
    hidden: false, class: 'creation',
    desc: 'forkJoin'
  },
  {
    hidden: false, class: 'creation',
    desc: 'from'
  },
  {
    hidden: false, class: 'creation',
    desc: 'fromEvent'
  },
  {
    hidden: false, class: 'creation',
    desc: 'fromEventPattern'
  },
  {
    hidden: false, class: 'creation',
    desc: 'generate'
  },
  {
    hidden: false, class: 'condition',
    desc: 'if'
  },
  {
    hidden: false, class: 'timing',
    desc: 'interval'
  },
  {
    hidden: false, class: 'merge',
    desc: 'merge'
  },
  {
    hidden: false, class: 'creation',
    desc: 'NEVER'
  },
  {
    hidden: false, class: 'creation',
    desc: 'of'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'onErrorResumeNext'
  },
  {
    hidden: false, class: 'transform',
    desc: 'pairs'
  },
  {
    hidden: false, class: 'condition',
    desc: 'race'
  },
  {
    hidden: false, class: 'creation',
    desc: 'range'
  },
  {
    hidden: false, class: 'subject',
    desc: 'ReplaySubject'
  },
  {
    hidden: false, class: 'subject',
    desc: 'Subject'
  },
  {
    hidden: false, class: 'error-handling',
    desc: 'throwError'
  },
  {
    hidden: false, class: 'timing',
    desc: 'timer'
  },
  {
    hidden: false, class: 'combine',
    desc: 'zip'
  },
];
