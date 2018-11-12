import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramFormComponent } from './academic-program-form.component';

describe('AcademicProgramFormComponent', () => {
  let component: AcademicProgramFormComponent;
  let fixture: ComponentFixture<AcademicProgramFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicProgramFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicProgramFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
