import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAndButtonComponent } from './input-and-button.component';

describe('InputAndButtonComponent', () => {
  let component: InputAndButtonComponent;
  let fixture: ComponentFixture<InputAndButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAndButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAndButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
