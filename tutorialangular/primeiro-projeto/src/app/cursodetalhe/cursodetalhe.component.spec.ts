import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodetalheComponent } from './cursodetalhe.component';

describe('CursodetalheComponent', () => {
  let component: CursodetalheComponent;
  let fixture: ComponentFixture<CursodetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursodetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
