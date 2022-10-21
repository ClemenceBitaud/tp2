import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Device} from "../../model/device";

@Component({
  selector: 'app-add-marker-dialog',
  templateUrl: './add-marker-dialog.component.html',
  styleUrls: ['./add-marker-dialog.component.css']
})
export class AddMarkerDialogComponent implements OnInit {

  public deviceName = '';

  constructor(public dialogRef: MatDialogRef<AddMarkerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Device) {
    if (data !== null){
      this.deviceName = data.name;
    }
  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
