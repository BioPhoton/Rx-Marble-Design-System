import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './design-system/page-not-found/page-not-found.component';
import { DiagramDetailsComponent } from './diagrams-list/diagram-details/diagram-details.component';
import { MdsDiagramsListComponent } from './diagrams-list/mds-diagrams-list.component';
import { IntroductionComponent } from './introduction/introduction.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'introduction',
  },
  {
    path: 'introduction',
    component: IntroductionComponent,
  },

  {
    path: 'design-system',
    loadChildren: () =>
      import('./design-system/design-system.module').then(
        m => m.DesignSystemModule,
      ),
  },

  {
    path: 'diagrams',
    children: [
      { path: '', component: MdsDiagramsListComponent },
      { path: 'detail/:selected', component: DiagramDetailsComponent },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
