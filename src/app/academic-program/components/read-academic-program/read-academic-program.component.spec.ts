import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAcademicProgramComponent } from './read-academic-program.component';

describe('ReadAcademicProgramComponent', () => {
  let component: ReadAcademicProgramComponent;
  let fixture: ComponentFixture<ReadAcademicProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAcademicProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAcademicProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
