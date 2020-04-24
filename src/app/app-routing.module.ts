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
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CompletionComponent } from './components/completion/completion.component';
import { ErrorComponent } from './components/error/error.component';
import { OperatorComponent } from './components/operator/operator.component';
import { TaskStacksComponent } from './components/task-stacks/task-stacks.component';
import { SectionsComponent } from './diagrams/sections/sections.component';
import { DescriptionComponent } from './diagrams/description/description.component';
import { LegendComponent } from './diagrams/legend/legend.component';
import { FlowDescriptionComponent } from './diagrams/flow-description/flow-description.component';
import { DiagramCanvasComponent } from './diagrams/diagram-canvas/diagram-canvas.component';
import { GridComponent } from './diagrams/grid/grid.component';
import { PositioningComponent } from './diagrams/positioning/positioning.component';
import { NotificationAndContentComponent } from './diagrams/notification-and-content/notification-and-content.component';
import { NotificationAndShapeComponent } from './diagrams/notification-and-shape/notification-and-shape.component';
import { NotificationAndColorComponent } from './diagrams/notification-and-color/notification-and-color.component';
import { MultipleNotificationsComponent } from './diagrams/multiple-notifications/multiple-notifications.component';
import { NotificationAndDynamicWidthComponent } from './diagrams/notification-and-dynamic-width/notification-and-dynamic-width.component';
import { NotificationAndInnerComponentsComponent } from './diagrams/notification-and-inner-components/notification-and-inner-components.component';
import { InnerStateComponent } from './diagrams/inner-state/inner-state.component';
import { OperatorPaddingComponent } from './diagrams/operator-padding/operator-padding.component';
import { OperatorAndLineComponent } from './diagrams/operator-and-line/operator-and-line.component';
import { MultipleOperationsComponent } from './diagrams/multiple-operations/multiple-operations.component';
import { OperatorNestingComponent } from './diagrams/operator-nesting/operator-nesting.component';
import { InactiveComponentsComponent } from './diagrams/inactive-components/inactive-components.component';
import { ExamplesPerOperatorComponent } from './diagrams/examples-per-operator/examples-per-operator.component';
import { BeyondTheStandardComponent } from './beyond-the-standard/beyond-the-standard.component';
import { AlternativeShapeComponent } from './beyond-the-standard/alternative-shape/alternative-shape.component';
import { AlternativeUnitsComponent } from './beyond-the-standard/alternative-units/alternative-units.component';
import { TodosComponent } from './beyond-the-standard/todos/todos.component';
import { VerticalLayoutComponent } from './beyond-the-standard/vertical-layout/vertical-layout.component';
import { OpenIssuesComponent } from './open-issues/open-issues.component';
import { OperationsAndTheirEndComponent } from './open-issues/operations-and-their-end/operations-and-their-end.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MdsDiagramsComponent } from './mds-diagrams/mds-diagrams.component';
import { DiagramDetailsComponent } from './mds-diagrams/diagram-details/diagram-details.component';

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
      { path: 'notifications', component: NotificationsComponent },
      { path: 'completion', component: CompletionComponent },
      { path: 'error', component: ErrorComponent },
      { path: 'operator', component: OperatorComponent },
      { path: 'task-stacks', component: TaskStacksComponent }
    ]
  },
  {
    path: 'diagrams',
    component: DiagramsComponent,
    children: [
      { path: 'sections', component: SectionsComponent },
      { path: 'description', component: DescriptionComponent },
      { path: 'legend', component: LegendComponent },
      { path: 'flow-description', component: FlowDescriptionComponent },
      { path: 'diagram-canvas', component: DiagramCanvasComponent },
      { path: 'grid', component: GridComponent },
      { path: 'positioning', component: PositioningComponent },
      { path: 'notification-and-content', component: NotificationAndContentComponent },
      { path: 'notification-and-shape', component: NotificationAndShapeComponent },
      { path: 'notification-and-color', component: NotificationAndColorComponent },
      { path: 'multiple-notifications', component: MultipleNotificationsComponent },
      { path: 'notification-and-dynamic-width', component: NotificationAndDynamicWidthComponent },
      { path: 'notification-and-inner-components', component: NotificationAndInnerComponentsComponent },
      { path: 'inner-state', component: InnerStateComponent },
      { path: 'operator-padding', component: OperatorPaddingComponent },
      { path: 'operator-and-line', component: OperatorAndLineComponent },
      { path: 'multiple-operations', component: MultipleOperationsComponent },
      { path: 'operator-nesting', component: OperatorNestingComponent },
      { path: 'inactive-components', component: InactiveComponentsComponent },
      { path: 'examples-per-operator', component: ExamplesPerOperatorComponent }
    ]
  },
  {
    path: 'beyond-the-standard',
    component: BeyondTheStandardComponent,
    children: [
      { path: 'alternative-shape', component: AlternativeShapeComponent },
      { path: 'alternative-units', component: AlternativeUnitsComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'vertical-layout', component: VerticalLayoutComponent }
    ]
  },
  {
    path: 'open-issues',
    component: OpenIssuesComponent,
    children: [
      { path: 'operations-and-their-end', component: OperationsAndTheirEndComponent }
    ]
  },
  {
    path: 'mds-diagrams',
    children: [
      { path: '', component: MdsDiagramsComponent},
      { path: 'detail/:selected', component: DiagramDetailsComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
