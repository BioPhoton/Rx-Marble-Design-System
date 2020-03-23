import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { DesignTokensComponent } from './design-tokens/design-tokens.component';
import { ComponentsComponent } from './components/components.component';
import { DiagramsComponent } from './diagrams/diagrams.component';

const routes: Routes = [
  {
    path: '',
    component: IntroductionComponent
  },
  {
    path: 'introduction',
    component: IntroductionComponent
  },
  {
    path: 'design-tokens',
    component: DesignTokensComponent
  },
  {
    path: 'components',
    component: ComponentsComponent
  },
  {
    path: 'diagrams',
    component: DiagramsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
