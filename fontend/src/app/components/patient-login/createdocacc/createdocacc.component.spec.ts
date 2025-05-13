import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedocaccComponent } from './createdocacc.component';

describe('CreatedocaccComponent', () => {
  let component: CreatedocaccComponent;
  let fixture: ComponentFixture<CreatedocaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatedocaccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedocaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
