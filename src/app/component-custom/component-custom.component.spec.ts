import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCustomComponent } from './component-custom.component';

describe('ComponentCustomComponent', () => {
  let component: ComponentCustomComponent;
  let fixture: ComponentFixture<ComponentCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
