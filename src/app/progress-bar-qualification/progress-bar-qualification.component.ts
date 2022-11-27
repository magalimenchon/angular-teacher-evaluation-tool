import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-progress-bar-qualification',
  templateUrl: './progress-bar-qualification.component.html',
  styleUrls: ['./progress-bar-qualification.component.scss']
})
export class ProgressBarQualificationComponent implements OnInit,  OnChanges {
  
  @Input()
  quantityToGrade!: number;

  @Input()
  totalTask!: number;

  percent!: string;

  @Input()
  isUnchanged: any;


  constructor() { 
  }

  ngOnInit(): void {
    console.log("la cuant" + this.quantityToGrade);
  }

  setPercent(): string {
    const numericPersent = ( (this.totalTask - this.quantityToGrade) / this.totalTask) * 100;
    console.log(numericPersent);
    return numericPersent.toString() + "%";
  }

  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log("holis");
    this.percent = this.setPercent();
  }

}
