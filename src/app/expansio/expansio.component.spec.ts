import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansioComponent } from './expansio.component';

describe('ExpansioComponent', () => {
  let component: ExpansioComponent;
  let fixture: ComponentFixture<ExpansioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
