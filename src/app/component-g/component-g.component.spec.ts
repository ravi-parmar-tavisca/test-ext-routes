import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentGComponent } from './component-g.component';

describe('ComponentGComponent', () => {
  let component: ComponentGComponent;
  let fixture: ComponentFixture<ComponentGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentGComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
