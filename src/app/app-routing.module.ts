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
import { ShapeComponent } from './design-tokens/shape/shape.component';
import { SizeComponent } from './design-tokens/size/size.component';
import { OverviewComponent } from './components/overview/overview.component';
import { ObservableComponent } from './components/observable/observable.component';
import { TimeSpanComponent } from './components/time-span/time-span.component';
import { EventInTimeComponent } from './components/event-in-time/event-in-time.component';
import { OperationComponent } from './components/operation/operation.component';
import { ConsumerEventComponent } from './components/consumer-event/consumer-event.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CompletionComponent } from './components/completion/completion.component';
import { ErrorComponent } from './components/error/error.component';
import { OperatorComponent } from './components/operator/operator.component';
import { TaskStacksComponent } from './components/task-stacks/task-stacks.component';

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
      { path: 'line', component: LineComponent },
      { path: 'shape', component: ShapeComponent },
      { path: 'size', component: SizeComponent }
    ]
  },
  {
    path: 'components',
    component: ComponentsComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'observable', component: ObservableComponent },
      { path: 'time-span', component: TimeSpanComponent },
      { path: 'event-in-time', component: EventInTimeComponent },
      { path: 'operation', component: OperationComponent },
      { path: 'consumer-event', component: ConsumerEventComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'completion', component: CompletionComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'operator', component: OperatorComponent },
      { path: 'task-stacks', component: TaskStacksComponent }
    ]
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
