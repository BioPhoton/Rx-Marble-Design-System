import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MdsDiagramsListComponent } from './diagrams-list/mds-diagrams-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DiagramDetailsComponent } from './diagrams-list/diagram-details/diagram-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IntroductionComponent,
    MdsDiagramsListComponent,
    DiagramDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
