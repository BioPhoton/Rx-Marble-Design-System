import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { DesignTokensComponent } from './design-tokens/design-tokens.component';
import { ComponentsComponent } from './components/components.component';
import { DiagramsComponent } from './diagrams/diagrams.component';
import { UnitComponent } from './design-tokens/unit/unit.component';
import { FontComponent } from './design-tokens/font/font.component';
import { ColorComponent } from './design-tokens/color/color.component';
import { LineComponent } from './design-tokens/line/line.component';
import { ShapeComponent } from './design-tokens/shape/shape.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    IntroductionComponent,
    DesignTokensComponent,
    ComponentsComponent,
    DiagramsComponent,
    UnitComponent,
    FontComponent,
    ColorComponent,
    LineComponent,
    ShapeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
