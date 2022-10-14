import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import {MatDialog} from "@angular/material/dialog";
import {AddMarkerDialogComponent} from "../add-marker-dialog/add-marker-dialog.component";
import {Device} from "../../model/device";
import {DomEvent} from "leaflet";
import stopPropagation = DomEvent.stopPropagation;
import {formatDate} from "@angular/common";
import * as $ from 'jquery';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  public devices: Device[] = [];
  public map!: L.Map;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // const marker = L.marker([51.5, -0.09]).addTo(myMap);

    this.map.on('click', (event => {
      this.openDialog(event);
    }));
  }

  openDialog(event: L.LeafletMouseEvent): void {
    const dialogRef = this.dialog.open(AddMarkerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        const icon = {
          icon: L.icon({
            iconSize: [ 25, 41 ],
            iconAnchor: [ 13, 0 ],
            // specify the path here
            iconUrl: './node_modules/leaflet/dist/images/marker-icon.png',
            shadowUrl: './node_modules/leaflet/dist/images/marker-shadow.png'
          })
        };
        const marker = L.marker(event.latlng, icon);
        marker.addTo(this.map);

        const device = new Device(result, marker);

        marker.on('click', (e => {
          stopPropagation(e);
          const popUpContent = `
             <div style="display: flex; flex-direction: column">
                <span style="font-weight: bold">------ Détail device ------</span>
                <span>ID : ${device.id}</span>
                <span>Name: ${device.name}</span>
                <span>Date : ${formatDate(device.date, 'mediumDate', 'en-US')}</span>
                <button id="removeMarkerButton" mat-raised-button color="warn">Supprimer</button>
            </div>`;

          L.popup()
            .setLatLng(marker.getLatLng())
            .setContent(popUpContent)
            .openOn(this.map);
        }))

        this.devices.push(device);
      }
    })
  }

}
