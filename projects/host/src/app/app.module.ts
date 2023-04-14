import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RawyGanttChartModule } from 'rawy-gantt-chart';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RawyGanttChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
