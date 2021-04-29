import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBlogpostComponent } from './remove-blogpost.component';

describe('RemoveBlogpostComponent', () => {
  let component: RemoveBlogpostComponent;
  let fixture: ComponentFixture<RemoveBlogpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBlogpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBlogpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
