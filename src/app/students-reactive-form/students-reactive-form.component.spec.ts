import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsReactiveFormComponent } from './students-reactive-form.component';

describe('StudentsReactiveFormComponent', () => {
  let component: StudentsReactiveFormComponent;
  let fixture: ComponentFixture<StudentsReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentsReactiveFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentsReactiveFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
