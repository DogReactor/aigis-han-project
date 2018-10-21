import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashInfoComponent } from './dash-info.component';

describe('DashInfoComponent', () => {
  let component: DashInfoComponent;
  let fixture: ComponentFixture<DashInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
