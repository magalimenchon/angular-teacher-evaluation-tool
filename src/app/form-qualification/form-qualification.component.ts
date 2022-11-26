import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';

@Component({
  selector: 'app-form-qualification',
  templateUrl: './form-qualification.component.html',
  styleUrls: ['./form-qualification.component.scss']
})
export class FormQualificationComponent implements OnInit {

  @Input()
  assignment!: Assignment;

  @Output()
  assignmentChange: EventEmitter<Assignment> = new EventEmitter<Assignment>();

  constructor(private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
  }

  onSubmit(values: any): void {
    console.log(values);
    this.putAssignment(values);
  }

  putAssignment(values: any): void {
    if(values.grade >= 1 && values.grade <= 10){
      this.assignment.task.grade = values.grade;
      this.assignmentChange.emit();
      this.assignmentDataService.putAssignmentById(this.assignment.id, this.assignment);
    }
  }
}
