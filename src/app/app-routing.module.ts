import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherEvaluationToolAssignmentsToGradeComponent } from './teacher-evaluation-tool-assignments-to-grade/teacher-evaluation-tool-assignments-to-grade.component';
import { TeacherEvaluationToolCompletedAssignmentsComponent } from './teacher-evaluation-tool-completed-assignments/teacher-evaluation-tool-completed-assignments.component';
import { TeacherEvaluationToolStatisticsComponent } from './teacher-evaluation-tool-statistics/teacher-evaluation-tool-statistics.component';

const routes: Routes = [
  { path: '',
    redirectTo: 'entregasParaCalificar', 
    pathMatch: 'full' },
  { path: 'entregasParaCalificar', 
    component: TeacherEvaluationToolAssignmentsToGradeComponent
  },
  { path: 'estadisticas', 
    component: TeacherEvaluationToolStatisticsComponent
  },
  { path: 'entregasRealizadas', 
    component: TeacherEvaluationToolCompletedAssignmentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
