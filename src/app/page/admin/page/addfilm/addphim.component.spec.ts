import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddphimComponent } from './addphim.component';

describe('AddphimComponent', () => {
  let component: AddphimComponent;
  let fixture: ComponentFixture<AddphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddphimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
