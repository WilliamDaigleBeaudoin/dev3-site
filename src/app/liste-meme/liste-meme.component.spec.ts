import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMemeComponent } from './liste-meme.component';

describe('ListeMemeComponent', () => {
  let component: ListeMemeComponent;
  let fixture: ComponentFixture<ListeMemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeMemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
