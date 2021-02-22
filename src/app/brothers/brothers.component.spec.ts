import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrothersComponent } from './brothers.component';

describe('BrothersComponent', () => {
  let component: BrothersComponent;
  let fixture: ComponentFixture<BrothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrothersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
