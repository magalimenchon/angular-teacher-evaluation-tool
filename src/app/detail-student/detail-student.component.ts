import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AssignmentDataService } from '../assignment-data.service';
import { Assignment } from '../assignment-list/Assignment';
import { DetailAssignmentComponent } from '../detail-assignment/detail-assignment.component';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.scss']
})
export class DetailStudentComponent implements OnInit{

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
