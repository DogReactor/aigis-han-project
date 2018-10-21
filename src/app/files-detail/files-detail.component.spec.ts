import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilesDetailComponent } from './files-detail.component';

describe('FilesDetailComponent', () => {
  let component: FilesDetailComponent;
  let fixture: ComponentFixture<FilesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
