import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Gellery } from './gellery';

describe('Gellery', () => {
  let component: Gellery;
  let fixture: ComponentFixture<Gellery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gellery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Gellery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
