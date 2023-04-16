import { NgModule } from '@angular/core';
import { RawyGanttChartComponent } from './rawy-gantt-chart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';

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
import { ResizableDirective } from './resizable.directive';


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
    RawyGanttChartComponent,
    ResizableDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MATERIAL_MODULES
  ],
  exports: [
    RawyGanttChartComponent,
    ResizableDirective,
  ]
})
export class RawyGanttChartModule { }
