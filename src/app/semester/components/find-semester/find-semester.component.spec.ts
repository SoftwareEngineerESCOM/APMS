import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSemesterComponent } from './find-semester.component';

describe('FindSemesterComponent', () => {
  let component: FindSemesterComponent;
  let fixture: ComponentFixture<FindSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
