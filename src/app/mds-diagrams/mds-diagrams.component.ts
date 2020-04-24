import {Component, OnInit} from '@angular/core';
import {MdsDiagram, mdsDiagrams} from "./diagrams";

@Component({
  selector: 'mds-mds-diagrams',
  templateUrl: './mds-diagrams.component.html',
  styleUrls: ['./mds-diagrams.component.scss']
})
export class MdsDiagramsComponent implements OnInit {
  public listView = true;
  public tileView = false;
  public activeView = 1;

  public searchFilter: string;
  public groupFilter: string;
  public indexGroups = [
    {group: 'All', value: ''},
    {group: 'Rate-Limit', value: 'rate-limit'},
    {group: 'Buffer', value: 'buffer'},
    {group: 'Error-Handling', value: 'error-handling'},
    {group: 'Combine', value: 'combine'},
    {group: 'Merge', value: 'merge'},
    {group: 'Scan', value: 'scan'},
    {group: 'Condition', value: 'condition'},
    {group: 'Timing', value: 'timing'},
    {group: 'Transform', value: 'transform'},
    {group: 'Filter', value: 'filter'},
    {group: 'Side-Effect', value: 'side-effect'},
    {group: 'Multicast', value: 'multicast'},
    {group: 'Scheduling', value: 'scheduling'},
    {group: 'Slice', value: 'slice'},
    {group: 'Subject', value: 'subject'},
    {group: 'Creation', value: 'creation'}
  ];

  public displayItems: MdsDiagram[];
  private indexItems = mdsDiagrams;

  constructor() {
  }

  ngOnInit(): void {
    this.displayItems = this.indexItems;
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


  filterIsSet = (filter: string): boolean => filter !== '' && filter !== undefined;

  textMatchesTextFilter = (text): boolean => text.indexOf(this.searchFilter) === -1;
  textMatchesGroupFilter = (text): boolean => text.indexOf(this.groupFilter) === -1;

  applyFilters() {
    this.displayItems.map(i => {
      if (this.filterIsSet(this.groupFilter)) {
        i.hidden = this.textMatchesGroupFilter(i.class) ?
          true : !this.filterIsSet(this.searchFilter) ? false : this.textMatchesTextFilter(i.desc);
      } else {
        i.hidden = !this.filterIsSet(this.searchFilter) ? false : this.textMatchesTextFilter(i.desc);
      }
    });
  }
}
