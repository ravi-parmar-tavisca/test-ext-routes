import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentIComponent } from './component-i.component';

describe('ComponentIComponent', () => {
  let component: ComponentIComponent;
  let fixture: ComponentFixture<ComponentIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
