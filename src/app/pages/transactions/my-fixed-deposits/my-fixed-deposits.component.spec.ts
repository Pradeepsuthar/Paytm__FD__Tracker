import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFixedDepositsComponent } from './my-fixed-deposits.component';

describe('MyFixedDepositsComponent', () => {
  let component: MyFixedDepositsComponent;
  let fixture: ComponentFixture<MyFixedDepositsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFixedDepositsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFixedDepositsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
