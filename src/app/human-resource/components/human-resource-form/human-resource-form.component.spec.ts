import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceFormComponent } from './human-resource-form.component';

describe('HumanResourceFormComponent', () => {
  let component: HumanResourceFormComponent;
  let fixture: ComponentFixture<HumanResourceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanResourceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
