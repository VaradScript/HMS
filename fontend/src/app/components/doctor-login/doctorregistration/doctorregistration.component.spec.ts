import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorregistrationComponent } from './doctorregistration.component';

describe('DoctorregistrationComponent', () => {
  let component: DoctorregistrationComponent;
  let fixture: ComponentFixture<DoctorregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorregistrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
