import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosdiComponent } from './cursosdi.component';

describe('CursosdiComponent', () => {
  let component: CursosdiComponent;
  let fixture: ComponentFixture<CursosdiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosdiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosdiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
