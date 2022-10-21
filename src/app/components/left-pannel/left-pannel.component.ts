import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-left-pannel',
  templateUrl: './left-pannel.component.html',
  styleUrls: ['./left-pannel.component.css']
})
export class LeftPannelComponent implements OnInit {

  @Input() buttonText!: string;
  @Input() navigateTo!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate([this.navigateTo]);
  }

}
