import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentKComponent } from './component-k.component';

describe('ComponentKComponent', () => {
  let component: ComponentKComponent;
  let fixture: ComponentFixture<ComponentKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
