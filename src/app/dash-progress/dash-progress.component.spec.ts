import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashProgressComponent } from './dash-progress.component';

describe('DashProgressComponent', () => {
  let component: DashProgressComponent;
  let fixture: ComponentFixture<DashProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
