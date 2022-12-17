import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalParTagComponent } from './total-par-tag.component';

describe('TotalParTagComponent', () => {
  let component: TotalParTagComponent;
  let fixture: ComponentFixture<TotalParTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalParTagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalParTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
