import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteCardComponent } from './restaurante-card.component';

describe('RestauranteCardComponent', () => {
  let component: RestauranteCardComponent;
  let fixture: ComponentFixture<RestauranteCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestauranteCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestauranteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
