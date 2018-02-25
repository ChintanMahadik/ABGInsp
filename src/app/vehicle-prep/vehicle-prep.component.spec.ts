import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePrepComponent } from './vehicle-prep.component';

describe('VehiclePrepComponent', () => {
  let component: VehiclePrepComponent;
  let fixture: ComponentFixture<VehiclePrepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclePrepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclePrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
