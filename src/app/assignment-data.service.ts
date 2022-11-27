import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Assignment } from './assignment-list/Assignment';

const URL = 'https://63706af20399d1995d7d1624.mockapi.io/teacher-education-tool/assignments';

const LIMITDATE = new Date('2022-01-01T06:55:31.820Z');

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Assignment[]> {

    return this.http.get<Assignment[]>(URL)
              .pipe(
                tap( (assignmentsMockFromObservable: Assignment[]) =>
                assignmentsMockFromObservable.forEach(assignment => this.setStatus(assignment)))
              );
  }

  private setStatus(assignment: Assignment): void {
    if(assignment.task.grade.toString().length != 0){
      if(new Date(assignment.task.submmited_date) > LIMITDATE){
        assignment.task.status = "CALIFICADO FUERA DE TÉRMINO";
      } else {
        assignment.task.status = "CALIFICADO";
      }
    } else {
      assignment.task.status = "PENDIENTE DE CALIFICACIÓN";
    }
  }

  public getAssignmentById(id: number): Observable<Assignment> {
    console.log(id);
    return this.http.get<Assignment>(URL + "/" + id).pipe();
  }

  public getAssignmentByIdToGrade(id: number): Observable<Assignment> {
    return this.http.get<Assignment>(URL + "/" + id).pipe(
            tap( (assignmentMockFromObservable: Assignment) =>
                this.setStatusToGrade(assignmentMockFromObservable))
            );
  }

  private setStatusToGrade(assignment: Assignment): void {
    if(new Date(assignment.task.submmited_date) > LIMITDATE){
      assignment.task.status = "FUERA DE TÉRMINO";
    }
  }

  public putAssignmentById(id: Number, assignment: Assignment) {
    console.log(id);
    this.http.put(URL + "/" + id, assignment).subscribe(assignmentPut => {
      console.log(assignmentPut);
    });
  }
}