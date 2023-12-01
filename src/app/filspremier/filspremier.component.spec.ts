import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilspremierComponent } from './filspremier.component';

describe('FilspremierComponent', () => {
  let component: FilspremierComponent;
  let fixture: ComponentFixture<FilspremierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilspremierComponent]
    });
    fixture = TestBed.createComponent(FilspremierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
