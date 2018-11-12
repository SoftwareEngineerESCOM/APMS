import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadStudyPlanComponent } from './read-study-plan.component';

describe('ReadStudyPlanComponent', () => {
  let component: ReadStudyPlanComponent;
  let fixture: ComponentFixture<ReadStudyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadStudyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadStudyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
