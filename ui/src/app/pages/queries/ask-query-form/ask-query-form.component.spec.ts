import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskQueryFormComponent } from './ask-query-form.component';

describe('AskQueryFormComponent', () => {
  let component: AskQueryFormComponent;
  let fixture: ComponentFixture<AskQueryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskQueryFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
