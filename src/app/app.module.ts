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

@NgModule({
  declarations: [
    AppComponent,
    TeacherEvaluationToolAssignmentsToGradeComponent,
    TeacherEvaluationToolStatisticsComponent,
    TeacherEvaluationToolCompletedAssignmentsComponent,
    AssignmentComponent,
    AssignmentListComponent,
    SectorDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
