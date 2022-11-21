import { Component, OnInit } from '@angular/core';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from './assignment';

@Component({
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.scss']
})
export class AssignmentListComponent implements OnInit {

  assignments: Assignment[] = [];

  constructor( private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
    this.assignmentDataService.getAll()
        .subscribe(assignmentsFromMockDataService => this.assignments = assignmentsFromMockDataService); 
  }

}
