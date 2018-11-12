import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAcademicProgramComponent } from './update-academic-program.component';

describe('UpdateAcademicProgramComponent', () => {
  let component: UpdateAcademicProgramComponent;
  let fixture: ComponentFixture<UpdateAcademicProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAcademicProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAcademicProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
