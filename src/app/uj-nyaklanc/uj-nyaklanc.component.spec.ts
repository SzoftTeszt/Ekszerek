import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjNyaklancComponent } from './uj-nyaklanc.component';

describe('UjNyaklancComponent', () => {
  let component: UjNyaklancComponent;
  let fixture: ComponentFixture<UjNyaklancComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjNyaklancComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjNyaklancComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
