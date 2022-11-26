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

  @Output()
  submitted: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    console.log(form.value);
    this.putAssignment(form.value);
    this.submitted = form.submitted;
    this.submitted.emit(form.submitted);
  }

  putAssignment(values: any): void {
    if(values.grade >= 1 && values.grade <= 10){
      this.assignment.task.grade = values.grade;
      this.assignmentDataService.putAssignmentById(this.assignment.id, this.assignment);
    }
  }
}
