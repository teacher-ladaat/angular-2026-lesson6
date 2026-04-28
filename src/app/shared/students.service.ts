import { Injectable, signal } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  private readonly _students = signal<Student[]>([]);

  get students() {
    return this._students.asReadonly();
  }

  addStudent(s: Student) {
    // count = signal(0)
    // count()
    // count.set(10)
    // count.update(c => c + 1)

    s.id = Date.now();
    this._students.update(oldStudents => [...oldStudents, s]);
  }
}
