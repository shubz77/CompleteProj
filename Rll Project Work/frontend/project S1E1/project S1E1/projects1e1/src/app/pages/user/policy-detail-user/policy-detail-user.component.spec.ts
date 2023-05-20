import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyDetailUserComponent } from './policy-detail-user.component';

describe('VenueDetailUserComponent', () => {
  let component: PolicyDetailUserComponent;
  let fixture: ComponentFixture<PolicyDetailUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyDetailUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyDetailUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
