import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideojuegolistaComponent } from './videojuegolista.component';

describe('VideojuegolistaComponent', () => {
  let component: VideojuegolistaComponent;
  let fixture: ComponentFixture<VideojuegolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideojuegolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideojuegolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
