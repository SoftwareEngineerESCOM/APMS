import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHumanResourceComponent } from './update-human-resource.component';

describe('UpdateHumanResourceComponent', () => {
  let component: UpdateHumanResourceComponent;
  let fixture: ComponentFixture<UpdateHumanResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateHumanResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
