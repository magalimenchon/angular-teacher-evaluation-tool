import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-teacher-evaluation-tool-assignments-to-grade',
  templateUrl: './teacher-evaluation-tool-assignments-to-grade.component.html',
  styleUrls: ['./teacher-evaluation-tool-assignments-to-grade.component.scss']
})
export class TeacherEvaluationToolAssignmentsToGradeComponent implements OnInit {

  quantityToGrade: any;
  totalTask: any;
  isUnchanged: any;
  percent: any;

  constructor() { }

  ngOnInit(): void {
  }

  receiveQuantityToGrade($event: any): void {
    this.quantityToGrade = $event;
  }

  receiveTotalTask($event: any): void {
    this.totalTask = $event;
  }

  receiveIsUnchanged($event: any): void {
    this.isUnchanged = $event;
  }

  receivePercent($event: string) {
    this.percent  = $event;
  }

}
