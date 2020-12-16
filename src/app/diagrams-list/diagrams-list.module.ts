import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { DiagramsListComponent } from './diagrams-list.component';
import { DiagramsListRoutingModule } from './diagrams-list.routing.module';

@NgModule({
  declarations: [DiagramsListComponent],
  imports: [CommonModule, DiagramsListRoutingModule, AngularMaterialModule],
})
export class DiagramsListModule {}
