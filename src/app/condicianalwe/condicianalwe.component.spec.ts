import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicianalweComponent } from './condicianalwe.component';

describe('CondicianalweComponent', () => {
  let component: CondicianalweComponent;
  let fixture: ComponentFixture<CondicianalweComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicianalweComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicianalweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
