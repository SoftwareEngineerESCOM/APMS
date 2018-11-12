import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindHumanResourceComponent } from './find-human-resource.component';

describe('FindHumanResourceComponent', () => {
  let component: FindHumanResourceComponent;
  let fixture: ComponentFixture<FindHumanResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindHumanResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
