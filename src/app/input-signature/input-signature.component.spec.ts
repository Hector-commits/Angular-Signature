import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSignatureComponent } from './input-signature.component';

describe('InputSignatureComponent', () => {
  let component: InputSignatureComponent;
  let fixture: ComponentFixture<InputSignatureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputSignatureComponent]
    });
    fixture = TestBed.createComponent(InputSignatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
