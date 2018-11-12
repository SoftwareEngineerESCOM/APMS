import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadHumanResourceComponent } from './read-human-resource.component';

describe('ReadHumanResourceComponent', () => {
  let component: ReadHumanResourceComponent;
  let fixture: ComponentFixture<ReadHumanResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadHumanResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
