import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MapComponent } from './components/map/map.component';
import { LeftPannelComponent } from './components/left-pannel/left-pannel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMarkerDialogComponent } from './components/add-marker-dialog/add-marker-dialog.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { DashboardDeviceComponent } from './components/dashboard-device/dashboard-device.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from "@angular/material/table";
import { DetailMarkerDialogComponent } from './components/detail-marker-dialog/detail-marker-dialog.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    LeftPannelComponent,
    AddMarkerDialogComponent,
    DashboardDeviceComponent,
    DashboardComponent,
    HomeComponent,
    DetailMarkerDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
