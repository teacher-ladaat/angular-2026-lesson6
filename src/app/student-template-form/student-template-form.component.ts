import { Component, inject } from '@angular/core';
import { Student } from '../shared/student';
import { FormsModule, NgForm } from '@angular/forms';
import { StudentsService } from '../shared/students.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-student-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './student-template-form.component.html',
  styleUrl: './student-template-form.component.scss',
})
export class StudentTemplateFormComponent {
  private readonly _studentsService = inject(StudentsService);

  newStudent: Student = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };

  // addStudent(frm: NgForm) {
  //   console.log('NgForm');
  //   console.log(frm);
  addStudent() {
    console.log('new Student');
    console.log(this.newStudent);

    this._studentsService.addStudent(this.newStudent);
    this.newStudent = {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };
  }
}
