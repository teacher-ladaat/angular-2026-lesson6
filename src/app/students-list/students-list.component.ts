import { Component, inject } from '@angular/core';
import { StudentsService } from '../shared/students.service';

@Component({
  selector: 'app-students-list',
  imports: [],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent {
  students = inject(StudentsService).students;
}
