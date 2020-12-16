import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './design-system/page-not-found/page-not-found.component';
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
    loadChildren: () =>
      import('./diagrams-list/diagrams-list.module').then(
        m => m.DiagramsListModule,
      ),
  },

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
