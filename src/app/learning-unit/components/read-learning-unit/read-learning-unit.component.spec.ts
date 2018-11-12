import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadLearningUnitComponent } from './read-learning-unit.component';

describe('ReadLearningUnitComponent', () => {
  let component: ReadLearningUnitComponent;
  let fixture: ComponentFixture<ReadLearningUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadLearningUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadLearningUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
