import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Assignment } from './assignment-list/assignment';

const URL = 'https://63706af20399d1995d7d1624.mockapi.io/teacher-education-tool/assignments';

@Injectable({
  providedIn: 'root'
})
export class AssignmentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Assignment[]> {

    return this.http.get<Assignment[]>(URL)
              .pipe(
                tap( (assignmentsMockFromObservable: Assignment[]) =>
                assignmentsMockFromObservable.forEach(assignment => assignment.task.grade = 0))
              );
  }
}
