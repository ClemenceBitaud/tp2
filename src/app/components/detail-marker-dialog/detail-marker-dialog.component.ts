import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../model/device";

@Component({
  selector: 'app-detail-marker-dialog',
  templateUrl: './detail-marker-dialog.component.html',
  styleUrls: ['./detail-marker-dialog.component.css']
})
export class DetailMarkerDialogComponent implements OnInit {

  device!: Device;
  constructor(public dialogRef: MatDialogRef<DetailMarkerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Device) {
    this.device = data;
  }

  ngOnInit(): void {
  }

}
