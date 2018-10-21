import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessbarComponent } from './processbar.component';

describe('ProcessbarComponent', () => {
  let component: ProcessbarComponent;
  let fixture: ComponentFixture<ProcessbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
