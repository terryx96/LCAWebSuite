import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUploadComponent } from './add-upload.component';

describe('AddUploadComponent', () => {
  let component: AddUploadComponent;
  let fixture: ComponentFixture<AddUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
