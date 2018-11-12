import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAcademicProgramComponent } from './find-academic-program.component';

describe('FindAcademicProgramComponent', () => {
  let component: FindAcademicProgramComponent;
  let fixture: ComponentFixture<FindAcademicProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAcademicProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAcademicProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
