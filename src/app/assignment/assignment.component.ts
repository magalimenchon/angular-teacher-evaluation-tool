import { Component, Input, OnInit } from '@angular/core';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {

  @Input()
  assignment: Assignment | undefined;

  constructor(  private route: ActivatedRoute,
                private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentDataService.getAssignmentById(id)
      .subscribe(assignment => this.assignment = assignment);
  }


}
