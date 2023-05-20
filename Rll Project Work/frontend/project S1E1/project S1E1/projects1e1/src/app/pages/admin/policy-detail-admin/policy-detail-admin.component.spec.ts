import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDetailAdminComponent } from './policy-detail-admin.component';

describe('PolicyDetailAdminComponent', () => {
  let component: PolicyDetailAdminComponent;
  let fixture: ComponentFixture<PolicyDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
