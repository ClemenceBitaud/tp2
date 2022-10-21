import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-pannel',
  templateUrl: './left-pannel.component.html',
  styleUrls: ['./left-pannel.component.css']
})
export class LeftPannelComponent implements OnInit {

  isDashboard = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDashboard(){
    this.router.navigate(['/dashboard']);
  }

  goToMap(){
    this.router.navigate(['/map']);
  }

}
