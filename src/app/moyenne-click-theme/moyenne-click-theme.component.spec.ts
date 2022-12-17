import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoyenneClickThemeComponent } from './moyenne-click-theme.component';

describe('MoyenneClickThemeComponent', () => {
  let component: MoyenneClickThemeComponent;
  let fixture: ComponentFixture<MoyenneClickThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoyenneClickThemeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoyenneClickThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
