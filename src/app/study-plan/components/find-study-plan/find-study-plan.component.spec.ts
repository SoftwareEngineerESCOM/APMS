import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindStudyPlanComponent } from './find-study-plan.component';

describe('FindStudyPlanComponent', () => {
  let component: FindStudyPlanComponent;
  let fixture: ComponentFixture<FindStudyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindStudyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindStudyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
