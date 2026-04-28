import { Component, signal } from '@angular/core';
import { StudentTemplateFormComponent } from "./student-template-form/student-template-form.component";
import { StudentsListComponent } from "./students-list/students-list.component";
import { StudentsReactiveFormComponent } from "./students-reactive-form/students-reactive-form.component";

@Component({
  selector: 'app-root',
  imports: [StudentTemplateFormComponent, StudentsListComponent, StudentsReactiveFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('lesson6');
}
