import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadSemesterComponent } from './read-semester.component';

describe('ReadSemesterComponent', () => {
  let component: ReadSemesterComponent;
  let fixture: ComponentFixture<ReadSemesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadSemesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadSemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
