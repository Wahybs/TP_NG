import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiercomposantComponent } from './premiercomposant.component';

describe('PremiercomposantComponent', () => {
  let component: PremiercomposantComponent;
  let fixture: ComponentFixture<PremiercomposantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PremiercomposantComponent]
    });
    fixture = TestBed.createComponent(PremiercomposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
