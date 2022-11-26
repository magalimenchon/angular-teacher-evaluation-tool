import { Component, OnInit } from '@angular/core';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';

@Component({
  selector: 'app-assignment-list-to-grade',
  templateUrl: './assignment-list-to-grade.component.html',
  styleUrls: ['./assignment-list-to-grade.component.scss']
})
export class AssignmentListToGradeComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor( private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
    this.assignmentDataService.getAll()
        .subscribe(assignmentsFromMockDataService => 
          this.assignments = assignmentsFromMockDataService
          .filter( assignment => assignment.task.grade.toString().length == 0)
        ); 
  }
}
