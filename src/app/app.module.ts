import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherEvaluationToolAssignmentsToGradeComponent } from './teacher-evaluation-tool-assignments-to-grade/teacher-evaluation-tool-assignments-to-grade.component';
import { TeacherEvaluationToolStatisticsComponent } from './teacher-evaluation-tool-statistics/teacher-evaluation-tool-statistics.component';
import { TeacherEvaluationToolCompletedAssignmentsComponent } from './teacher-evaluation-tool-completed-assignments/teacher-evaluation-tool-completed-assignments.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SectorDiagramComponent } from './sector-diagram/sector-diagram.component';
import { AssignmentListToGradeComponent } from './assignment-list-to-grade/assignment-list-to-grade.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { ButtonGoBackComponent } from './button-go-back/button-go-back.component';
import { DetailAssignmentComponent } from './detail-assignment/detail-assignment.component';
import { FormQualificationComponent } from './form-qualification/form-qualification.component';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ProgressBarQualificationComponent } from './progress-bar-qualification/progress-bar-qualification.component';


@NgModule({
  declarations: [
    AppComponent,
    TeacherEvaluationToolAssignmentsToGradeComponent,
    TeacherEvaluationToolStatisticsComponent,
    TeacherEvaluationToolCompletedAssignmentsComponent,
    AssignmentComponent,
    AssignmentListComponent,
    SectorDiagramComponent,
    AssignmentListToGradeComponent,
    DetailStudentComponent,
    ButtonGoBackComponent,
    DetailAssignmentComponent,
    FormQualificationComponent,
    ProgressBarQualificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
