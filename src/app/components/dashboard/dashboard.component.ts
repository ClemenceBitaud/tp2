import {Component, Input, OnInit} from '@angular/core';
import {Device} from "../../model/device";
import * as L from 'leaflet';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  devices: Device[] = [];

  constructor() { }

  ngOnInit(): void {
    const device = new Device("Test1", new L.LatLng(0,0));
    this.devices.push(device);
  }

}
