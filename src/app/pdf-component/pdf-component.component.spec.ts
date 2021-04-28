import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfComponentComponent } from './pdf-component.component';

describe('PdfComponentComponent', () => {
  let component: PdfComponentComponent;
  let fixture: ComponentFixture<PdfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
