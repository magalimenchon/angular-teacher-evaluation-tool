import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';

@Component({
  selector: 'app-detail-assignment',
  templateUrl: './detail-assignment.component.html',
  styleUrls: ['./detail-assignment.component.scss']
})
export class DetailAssignmentComponent implements OnInit {

  @Input()
  assignment: Assignment | undefined;

  @Output()
  assignmentChange: EventEmitter<Assignment> = new EventEmitter<Assignment>();
  
  constructor(private route: ActivatedRoute,
              private assignmentDataService: AssignmentDataService) { }

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.assignmentDataService.getAssignmentByIdToGrade(id)
      .subscribe(assignment => this.assignment = assignment);
  }

}
