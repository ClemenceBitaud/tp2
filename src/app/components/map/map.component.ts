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

    this.map.on('dblclick', (event => {
      this.openDialog(event);
    }));
  }

  openDialog(event: L.LeafletMouseEvent): void {
    const dialogRef = this.dialog.open(AddMarkerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        const icon = {
          icon: L.icon({
            iconSize: [ 41, 41 ],
            iconAnchor: [ 13, 0 ],
            // specify the path here
            iconUrl: './assets/location.png',
          })
        };

        const device = new Device(result);
        const popUpContent = `
             <div style="display: flex; flex-direction: column">
                <span style="font-weight: bold">------ Détail device ------</span>
                <span>ID : ${device.id}</span>
                <span>Name: ${device.name}</span>
                <span>Date : ${formatDate(device.date, 'mediumDate', 'en-US')}</span>
                <button class="supress-marker mat-raised-button">Supprimer</button>
            </div>`;
        const marker = L.marker(event.latlng, icon);
        this.map.addLayer(marker);
        marker.bindPopup(popUpContent);
        const map = this.map;

        marker.on('click', (e => {
          stopPropagation(e);
          marker.openPopup()
          $(".supress-marker:visible").click(function () {
            map.removeLayer(marker);
          });
        }))

        this.devices.push(device);
      }
    })
  }
}
