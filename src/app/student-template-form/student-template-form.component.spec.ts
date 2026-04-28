import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTemplateFormComponent } from './student-template-form.component';

describe('StudentTemplateFormComponent', () => {
  let component: StudentTemplateFormComponent;
  let fixture: ComponentFixture<StudentTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentTemplateFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentTemplateFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
