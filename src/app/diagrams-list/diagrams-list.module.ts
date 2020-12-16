import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { DiagramsListComponent } from './diagrams-list.component';
import { DiagramsListRoutingModule } from './diagrams-list.routing.module';

@NgModule({
  declarations: [DiagramsListComponent],
  imports: [
    CommonModule,
    DiagramsListRoutingModule,

    MatButtonModule,
    MatButtonToggleModule,
    MatChipsModule,
  ],
})
export class DiagramsListModule {}
