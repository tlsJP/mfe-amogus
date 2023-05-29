import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmogusComponent } from './amogus.component';

describe('AmogusComponent', () => {
  let component: AmogusComponent;
  let fixture: ComponentFixture<AmogusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmogusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmogusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
