import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { OrganizationChartModule } from 'primeng/organizationchart'
import { PanelModule } from 'primeng/panel'

import { AppComponent } from './app.component';
import { MyChartComponent } from './my-chart/my-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MyChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OrganizationChartModule,
    FormsModule,
    BrowserAnimationsModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
