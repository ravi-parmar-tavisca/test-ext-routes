import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentJComponent } from './component-j.component';

describe('ComponentJComponent', () => {
  let component: ComponentJComponent;
  let fixture: ComponentFixture<ComponentJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
