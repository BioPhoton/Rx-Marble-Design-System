import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiagramsListComponent } from './diagrams-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DiagramsListComponent,
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./diagram-detail/diagram-detail.module').then(
        m => m.DiagramDetailModule,
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiagramsListRoutingModule {}
