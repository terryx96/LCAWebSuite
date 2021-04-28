import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveBrothersComponent } from './remove-brothers.component';

describe('RemoveBrothersComponent', () => {
  let component: RemoveBrothersComponent;
  let fixture: ComponentFixture<RemoveBrothersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveBrothersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveBrothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
