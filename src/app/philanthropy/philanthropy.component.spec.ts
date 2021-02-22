import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilanthropyComponent } from './philanthropy.component';

describe('PhilanthropyComponent', () => {
  let component: PhilanthropyComponent;
  let fixture: ComponentFixture<PhilanthropyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilanthropyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilanthropyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
