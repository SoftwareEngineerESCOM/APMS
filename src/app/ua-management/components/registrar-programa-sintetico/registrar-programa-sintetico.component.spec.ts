import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProgramaSinteticoComponent } from './registrar-programa-sintetico.component';

describe('RegistrarProgramaSinteticoComponent', () => {
  let component: RegistrarProgramaSinteticoComponent;
  let fixture: ComponentFixture<RegistrarProgramaSinteticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarProgramaSinteticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProgramaSinteticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
