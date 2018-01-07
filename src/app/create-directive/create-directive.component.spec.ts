import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDirectiveComponent } from './create-directive.component';

describe('CreateDirectiveComponent', () => {
  let component: CreateDirectiveComponent;
  let fixture: ComponentFixture<CreateDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
