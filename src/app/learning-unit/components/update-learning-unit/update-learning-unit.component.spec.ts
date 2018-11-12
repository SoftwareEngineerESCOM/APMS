import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLearningUnitComponent } from './update-learning-unit.component';

describe('UpdateLearningUnitComponent', () => {
  let component: UpdateLearningUnitComponent;
  let fixture: ComponentFixture<UpdateLearningUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLearningUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateLearningUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
