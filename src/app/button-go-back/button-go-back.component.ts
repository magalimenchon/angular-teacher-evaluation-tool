import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-button-go-back',
  templateUrl: './button-go-back.component.html',
  styleUrls: ['./button-go-back.component.scss']
})
export class ButtonGoBackComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
                private location: Location){ }

  ngOnInit(): void {
  }

  goBack(): void {
    this.getLocation().back();
  }

  getLocation(): Location {
    return this.location;
  }

}
