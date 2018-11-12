import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyPlanFormComponent } from './study-plan-form.component';

describe('StudyPlanFormComponent', () => {
  let component: StudyPlanFormComponent;
  let fixture: ComponentFixture<StudyPlanFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyPlanFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyPlanFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
