import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mds-mds-diagrams',
  templateUrl: './mds-diagrams.component.html',
  styleUrls: ['./mds-diagrams.component.scss']
})
export class MdsDiagramsComponent implements OnInit {
  public listView = true;
  public tileView = false;
  public activeView = 1;

  public indexGroups = [
    { group: 'Rate-Limit' },
    { group: 'Buffer' },
    { group: 'Error-Handling' },
    { group: 'Combine' },
    { group: 'Merge' },
    { group: 'Scan' },
    { group: 'Condition' },
    { group: 'Timing' },
    { group: 'Transform' },
    { group: 'Filter' },
    { group: 'Side-Effect' },
    { group: 'Multicast' },
    { group: 'Scheduling' },
    { group: 'Slice' },
    { group: 'Subject' },
    { group: 'Creation' }
  ];

  public indexItems = [
    {
      class: 'rate-limit',
      desc: 'audit',
      image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/audit.png?raw=true'
    },
    {
      class: 'rate-limit',
      desc: 'auditTime',
      image: 'https://github.com/BioPhoton/Rx-Marble-Design-System/blob/dev/assets/operators/new/rate-limiting/auditTime.png?raw=true'
    },
    {
      class: 'buffer',
      desc: 'buffer'
    },
    {
      class: 'buffer',
      desc: 'bufferCount'
    },
    {
      class: 'buffer',
      desc: 'bufferTime'
    },
    {
      class: 'buffer',
      desc: 'bufferToggle'
    },
    {
      class: 'buffer',
      desc: 'bufferWhen'
    },
    {
      class: 'error-handling',
      desc: 'catchError'
    },
    {
      class: 'combine',
      desc: 'combineAll'
    },
    {
      class: 'combine',
      desc: 'combineLatest'
    },
    {
      class: 'merge',
      desc: 'concat'
    },
    {
      class: 'merge',
      desc: 'concatAll'
    },
    {
      class: 'merge',
      desc: 'concatMap'
    },
    {
      class: 'merge',
      desc: 'concatMapTo'
    },
    {
      class: 'scan',
      desc: 'count'
    },
    {
      class: 'rate-limit',
      desc: 'debounce'
    },
    {
      class: 'rate-limit',
      desc: 'debounceTime'
    },
    {
      class: 'condition',
      desc: 'defaultEmpty'
    },
    {
      class: 'timing',
      desc: 'delay'
    },
    {
      class: 'timing',
      desc: 'delayWhen'
    },
    {
      class: 'transform',
      desc: 'dematerialize'
    },
    {
      class: 'filter',
      desc: 'distinct'
    },
    {
      class: 'filter',
      desc: 'distinctUntilChanged'
    },
    {
      class: 'filter',
      desc: 'distinctUntilKexChanged'
    },
    {
      class: 'filter',
      desc: 'elementAt'
    },
    {
      class: 'combine',
      desc: 'endWith'
    },
    {
      class: 'scan',
      desc: 'every'
    },
    {
      class: 'merge',
      desc: 'exhaust'
    },
    {
      class: 'merge',
      desc: 'exhaustMap'
    },
    {
      class: 'merge',
      desc: 'expand'
    },
    {
      class: 'filter',
      desc: 'Filter'
    },
    {
      class: 'side-effect',
      desc: 'finalize'
    },
    {
      class: 'filter',
      desc: 'find'
    },
    {
      class: 'filter',
      desc: 'findIndex'
    },
    {
      class: 'filter',
      desc: 'first'
    },
    {
      class: 'slice',
      desc: 'groupBy'
    },
    {
      class: 'filter',
      desc: 'ignoreElements'
    },
    {
      class: 'condition',
      desc: 'isEmpty'
    },
    {
      class: 'filter',
      desc: 'last'
    },
    {
      class: 'transform',
      desc: 'map'
    },
    {
      class: 'transform',
      desc: 'mapTo'
    },
    {
      class: 'transform',
      desc: 'materialize'
    },
    {
      class: 'scan',
      desc: 'max'
    },
    {
      class: 'merge',
      desc: 'merge'
    },
    {
      class: 'merge',
      desc: 'mergeAll'
    },
    {
      class: 'merge',
      desc: 'mergeMap'
    },
    {
      class: 'merge',
      desc: 'flatMap'
    },
    {
      class: 'merge',
      desc: 'mergeMapTp'
    },
    {
      class: 'merge',
      desc: 'mergeScan'
    },
    {
      class: 'scan',
      desc: 'min'
    },
    {
      class: 'scheduling',
      desc: 'observeOn'
    },
    {
      class: 'error-handling',
      desc: 'onErrorResumeNext'
    },
    {
      class: 'buffer',
      desc: 'pairwise'
    },
    {
      class: 'filter',
      desc: 'partition'
    },
    {
      class: 'transform',
      desc: 'pluck'
    },
    {
      class: 'condition',
      desc: 'race'
    },
    {
      class: 'scan',
      desc: 'reduce'
    },
    {
      class: 'error-handling',
      desc: 'repeat'
    },
    {
      class: 'error-handling',
      desc: 'repeatWhen'
    },
    {
      class: 'error-handling',
      desc: 'retry'
    },
    {
      class: 'error-handling',
      desc: 'retryWhen'
    },
    {
      class: 'rate-limit',
      desc: 'sample'
    },
    {
      class: 'rate-limit',
      desc: 'sampleTime'
    },
    {
      class: 'scan',
      desc: 'scan'
    },
    {
      class: 'scan',
      desc: 'sequenceEqual'
    },
    {
      class: 'filter',
      desc: 'single'
    },
    {
      class: 'filter',
      desc: 'skip'
    },
    {
      class: 'filter',
      desc: 'skipLast'
    },
    {
      class: 'filter',
      desc: 'skipUntil'
    },
    {
      class: 'filter',
      desc: 'skipWhile'
    },
    {
      class: 'combine',
      desc: 'startWith'
    },
    {
      class: 'scheduling',
      desc: 'subscribeOn'
    },
    {
      class: 'merge',
      desc: 'switchAll'
    },
    {
      class: 'merge',
      desc: 'switchMap'
    },
    {
      class: 'merge',
      desc: 'switchMapTo'
    },
    {
      class: 'combine',
      desc: 'switchScan'
    },
    {
      class: 'filter',
      desc: 'take'
    },
    {
      class: 'filter',
      desc: 'takeLast'
    },
    {
      class: 'filter',
      desc: 'takeUntil'
    },
    {
      class: 'filter',
      desc: 'takeWhile'
    },
    {
      class: 'side-effect',
      desc: 'tab'
    },
    {
      class: 'rate-limit',
      desc: 'throttle'
    },
    {
      class: 'rate-limit',
      desc: 'throttleTime'
    },
    {
      class: 'error-handling',
      desc: 'throwIfEmpty'
    },
    {
      class: 'transform',
      desc: 'timeInInterval'
    },
    {
      class: 'error-handling',
      desc: 'timeout'
    },
    {
      class: 'error-handling',
      desc: 'timeoutWith'
    },
    {
      class: 'transform',
      desc: 'timestamp'
    },
    {
      class: 'scan',
      desc: 'toArray'
    },
    {
      class: 'scan',
      desc: 'window'
    },
    {
      class: 'scan',
      desc: 'windowCount'
    },
    {
      class: 'scan',
      desc: 'windowTime'
    },
    {
      class: 'scan',
      desc: 'windowToggle'
    },
    {
      class: 'scan',
      desc: 'windowWhen'
    },
    {
      class: 'combine',
      desc: 'withLatestFrom'
    },
    {
      class: 'combine',
      desc: 'zip'
    },
    {
      class: 'combine',
      desc: 'zipAll'
    },
    {
      class: 'subject',
      desc: 'AsyncSubject'
    },
    {
      class: 'subject',
      desc: 'BehaviourSubject'
    },
    {
      class: 'combine',
      desc: 'combineLatest'
    },
    {
      class: 'merge',
      desc: 'concat'
    },
    {
      class: 'creation',
      desc: 'create'
    },
    {
      class: 'creation',
      desc: 'defer'
    },
    {
      class: 'creation',
      desc: 'EMPTY'
    },
    {
      class: 'creation',
      desc: 'forkJoin'
    },
    {
      class: 'creation',
      desc: 'from'
    },
    {
      class: 'creation',
      desc: 'fromEvent'
    },
    {
      class: 'creation',
      desc: 'fromEventPattern'
    },
    {
      class: 'creation',
      desc: 'generate'
    },
    {
      class: 'condition',
      desc: 'if'
    },
    {
      class: 'timing',
      desc: 'interval'
    },
    {
      class: 'merge',
      desc: 'merge'
    },
    {
      class: 'creation',
      desc: 'NEVER'
    },
    {
      class: 'creation',
      desc: 'of'
    },
    {
      class: 'error-handling',
      desc: 'onErrorResumeNext'
    },
    {
      class: 'transform',
      desc: 'pairs'
    },
    {
      class: 'condition',
      desc: 'race'
    },
    {
      class: 'creation',
      desc: 'range'
    },
    {
      class: 'subject',
      desc: 'ReplaySubject'
    },
    {
      class: 'subject',
      desc: 'Subject'
    },
    {
      class: 'error-handling',
      desc: 'throwError'
    },
    {
      class: 'timing',
      desc: 'timer'
    },
    {
      class: 'combine',
      desc: 'zip'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public changeView(event) {
    this.activeView = event;
    if (this.listView === true) {
      this.listView = false;
      this.tileView = true;
    } else {
      this.listView = true;
      this.tileView = false;
    }
  }

}
