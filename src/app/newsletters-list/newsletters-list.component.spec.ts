import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewslettersListComponent } from './newsletters-list.component';

describe('NewslettersListComponent', () => {
  let component: NewslettersListComponent;
  let fixture: ComponentFixture<NewslettersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewslettersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewslettersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
