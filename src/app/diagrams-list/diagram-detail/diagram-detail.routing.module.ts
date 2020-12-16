import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramDetailComponent } from './diagram-detail.component';

const routes: Routes = [
  {
    path: ':name',
    component: DiagramDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramDetailRoutingModule {}
