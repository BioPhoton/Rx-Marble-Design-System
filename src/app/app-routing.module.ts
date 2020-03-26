import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { DesignTokensComponent } from './design-tokens/design-tokens.component';
import { ComponentsComponent } from './components/components.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { UnitComponent } from './design-tokens/unit/unit.component';
import { FontComponent } from './design-tokens/font/font.component';
import { ColorComponent } from './design-tokens/color/color.component';
import { LineComponent } from './design-tokens/line/line.component';

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
    component: DesignTokensComponent,
    children: [
      { path: 'unit', component: UnitComponent },
      { path: 'font', component: FontComponent },
      { path: 'color', component: ColorComponent },
      { path: 'line', component: LineComponent }
    ]
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
