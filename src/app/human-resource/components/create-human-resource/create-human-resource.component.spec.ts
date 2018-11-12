import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHumanResourceComponent } from './create-human-resource.component';

describe('CreateHumanResourceComponent', () => {
  let component: CreateHumanResourceComponent;
  let fixture: ComponentFixture<CreateHumanResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHumanResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHumanResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-human-resource', () => {
    expect(component).toBeTruthy();
  });
});
