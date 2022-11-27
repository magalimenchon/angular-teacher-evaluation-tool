import { Component, EventEmitter, Input,  OnInit, Output } from '@angular/core';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';

@Component({
  selector: 'app-assignment-list-to-grade',
  templateUrl: './assignment-list-to-grade.component.html',
  styleUrls: ['./assignment-list-to-grade.component.scss']
})
export class AssignmentListToGradeComponent implements OnInit {

  assignments: Assignment[] = [];

  @Output()
  quantityToGradeChange: EventEmitter<number> = new EventEmitter<number>();

  quantityToGrade: number = 0;
  
  @Output()
  totalTaskChange: EventEmitter<number> = new EventEmitter<number>();

  totalTask: number = 0;

  isUnchanged = false;

  @Input()
  percent = false;

  @Output()
  isUnchangedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor( private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
    this.assignmentDataService.getAll()
        .subscribe(assignmentsFromMockDataService => 
          this.assignments = assignmentsFromMockDataService
          .filter( assignment => assignment.task.grade.toString().length == 0)
        ); 
    
    this.assignmentDataService.getAll()
    .subscribe(assignmentsFromMockDataService => 
          assignmentsFromMockDataService.forEach(assignment => {
            if(assignment.task.grade.toString().length == 0){
              this.quantityToGrade =+ this.quantityToGrade + 1;
            }
            this.totalTask =+ this.totalTask + 1;
    }));
  }

  emitQuantityToGrade() {
    this.quantityToGradeChange.emit(this.quantityToGrade);
    this.totalTaskChange.emit(this.totalTask);
    this.isUnchanged = true;
    this.isUnchangedChange.emit(this.isUnchanged);
    console.log(this.quantityToGradeChange);
    console.log("emitió");
  }
}
