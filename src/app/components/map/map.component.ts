import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

    this.map.on('dblclick', (event => {
      this.openDialog(event);
    }));

    if (this.devices.length !== 0){
      for (let device of this.devices){
        this.addMarker(device, this.map, this.devices);
      }
    }
  }

  openDialog(event: L.LeafletMouseEvent): void {
    const dialogRef = this.dialog.open(AddMarkerDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        const device = new Device(result, event.latlng);
        this.devices.push(device);
        this.addMarker(device, this.map, this.devices);
      }
    })
  }

  addMarker(device: Device, map: L.Map, devices: Device[]){

    const icon = {
      icon: L.icon({
        iconSize: [ 41, 41 ],
        iconAnchor: [ 13, 0 ],
        // specify the path here
        iconUrl: './assets/location.png',
      })
    };
    const popUpContent = `
             <div style="display: flex; flex-direction: column">
                <span style="font-weight: bold">------ Détail device ------</span>
                <span>ID : ${device.id}</span>
                <span>Name: ${device.name}</span>
                <span>Date : ${formatDate(device.date, 'mediumDate', 'en-US')}</span>
                <button class="supress-marker mat-raised-button">Supprimer</button>
            </div>`;
    const marker = L.marker(device.latLng, icon);
    map.addLayer(marker);
    marker.bindPopup(popUpContent);

    marker.on('click', (e => {
      stopPropagation(e);
      marker.openPopup()
      $(".supress-marker:visible").click(function () {
        map.removeLayer(marker);
        const index = devices.indexOf(device, 0);
        if (index > -1) {
          devices.splice(index, 1);
        }
      });
    }))
  }
}
