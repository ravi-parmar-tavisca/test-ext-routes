import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentHComponent } from './component-h.component';

describe('ComponentHComponent', () => {
  let component: ComponentHComponent;
  let fixture: ComponentFixture<ComponentHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
