import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Device} from "../../model/device";
import {MatTable} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {DetailMarkerDialogComponent} from "../detail-marker-dialog/detail-marker-dialog.component";
import {AddMarkerDialogComponent} from "../add-marker-dialog/add-marker-dialog.component";

@Component({
  selector: 'app-dashboard-device',
  templateUrl: './dashboard-device.component.html',
  styleUrls: ['./dashboard-device.component.css']
})
export class DashboardDeviceComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  @Input() devices!: Device[];
  displayedColumns: string[] = ['name', 'date', 'actions'];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteDevice(rowId: number){
    this.devices.splice(rowId, 1);
    this.table.renderRows();
  }

  openDetail(device: Device){
    this.dialog.open(DetailMarkerDialogComponent,
      {data: device});
  }

  openEdit(device: Device){

    const dialogRef = this.dialog.open(AddMarkerDialogComponent, {data: device});

    dialogRef.afterClosed().subscribe(result => {
      device.name = result;
      this.table.renderRows();
    })


  }

}
