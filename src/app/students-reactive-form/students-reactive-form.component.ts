import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentsService } from '../shared/students.service';
import { Student } from '../shared/student';

@Component({
  selector: 'app-students-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './students-reactive-form.component.html',
  styleUrl: './students-reactive-form.component.scss',
})
export class StudentsReactiveFormComponent {
  private readonly _studentsService = inject(StudentsService);

  studentForm = new FormGroup({
    name: new FormGroup({
      firstName: new FormControl('פלוני', Validators.required),
      lastName: new FormControl('אלמוני', [Validators.required, Validators.minLength(2)]),
    }),
    phone: new FormControl(
      '',
      Validators.pattern(/^0(?:[234689]|5[0-689]|7[246789])(?![01])(\d{7})$/),
    ),
    email: new FormControl('', Validators.email),
    marks: new FormArray([
      new FormControl(90, [Validators.min(0), Validators.max(100), Validators.required]),
    ]),
  });

  get arrMarks(): FormArray {
    return this.studentForm.get('marks') as FormArray;
  }

  addStudent() {
    console.log(this.studentForm.value);

    this._studentsService.addStudent(this.studentForm.value as Student);
  }

  addMark() {
    this.arrMarks.push(
      new FormControl('', [Validators.min(0), Validators.max(100), Validators.required]),
    );
  }
}
