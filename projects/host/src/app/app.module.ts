import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RawyGanttChartModule } from 'rawy-gantt-chart';
import { GanttCharComponent } from './gantt-chart/gantt-chart.component';
import { ResizableDirective } from './directives/resizable.directive';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule,} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

import { MatTooltipModule } from "@angular/material/tooltip";
import {CdkAccordionModule} from '@angular/cdk/accordion';
const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatCardModule,
  MatInputModule,
  MatSidenavModule,
  MatListModule,
  MatTableModule,
  MatMenuModule,
  MatTooltipModule,
  CdkAccordionModule
 ];


@NgModule({
  declarations: [
    AppComponent,
    GanttCharComponent,
    ResizableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RawyGanttChartModule,
    MATERIAL_MODULES

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
