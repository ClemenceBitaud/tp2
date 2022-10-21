import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-marker-dialog',
  templateUrl: './add-marker-dialog.component.html',
  styleUrls: ['./add-marker-dialog.component.css']
})
export class AddMarkerDialogComponent implements OnInit {

  public deviceName = '';

  constructor(public dialogRef: MatDialogRef<AddMarkerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }

}
