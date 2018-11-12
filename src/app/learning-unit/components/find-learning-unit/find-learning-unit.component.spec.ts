import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLearningUnitComponent } from './find-learning-unit.component';

describe('FindLearningUnitComponent', () => {
  let component: FindLearningUnitComponent;
  let fixture: ComponentFixture<FindLearningUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLearningUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLearningUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
