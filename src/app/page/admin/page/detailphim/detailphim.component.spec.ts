import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailphimComponent } from './detailphim.component';

describe('DetailphimComponent', () => {
  let component: DetailphimComponent;
  let fixture: ComponentFixture<DetailphimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailphimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailphimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
