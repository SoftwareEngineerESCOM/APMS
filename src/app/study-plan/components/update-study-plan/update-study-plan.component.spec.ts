import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStudyPlanComponent } from './update-study-plan.component';

describe('UpdateStudyPlanComponent', () => {
  let component: UpdateStudyPlanComponent;
  let fixture: ComponentFixture<UpdateStudyPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStudyPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStudyPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
