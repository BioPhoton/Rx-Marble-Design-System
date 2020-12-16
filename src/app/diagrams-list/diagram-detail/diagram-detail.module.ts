import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DiagramDetailComponent } from './diagram-detail.component';
import { DiagramDetailRoutingModule } from './diagram-detail.routing.module';

@NgModule({
  declarations: [DiagramDetailComponent],
  imports: [CommonModule, DiagramDetailRoutingModule, MatButtonModule],
})
export class DiagramDetailModule {}
