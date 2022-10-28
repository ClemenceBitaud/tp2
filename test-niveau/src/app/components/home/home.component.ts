import { Component, OnInit } from '@angular/core';
import {Device} from "../../model/device";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public devices: Device[] = [];
  public isMapDisplay = true;

  constructor() { }

  ngOnInit(): void {
  }

  addDevice(device: Device){
    this.devices.push(device);
    console.log(this.devices);
  }

  navigate(component: string){
    this.isMapDisplay = component !== 'dashboard';
  }

}
