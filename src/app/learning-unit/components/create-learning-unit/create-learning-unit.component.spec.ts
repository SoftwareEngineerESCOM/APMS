import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningUnitComponent } from './create-learning-unit.component';

describe('CreateLearningUnitComponent', () => {
  let component: CreateLearningUnitComponent;
  let fixture: ComponentFixture<CreateLearningUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLearningUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLearningUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
